import { useEffect, useState } from "react";
import EventCard from "../components/EventCard.tsx";
import axios from "axios";
import { Event } from "../types/event.ts";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5001/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const updateParticipants = async (event: Event, participantName: string) => {
    const { id, participants } = event;
    const newParticipant = {
      id: new Date().getTime(),
      name: participantName,
    };
    const newEvent = {
      ...event,
      participants: [...participants, newParticipant],
    };

    try {
      await axios.patch(`http://localhost:5001/events/${id}`, newEvent);
      fetchEvents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <p className="home__about" style={{padding: "2%", color:"darkslategrey", textTransform: "uppercase", textAlign: "center"}}>
        Welcome to our Youth Center. <p>We offer various programs and activities to
        help young people grow, learn, and thrive.</p> Explore our events,
        activities, and community programs.
      </p>
      <div className="event-grid">
        {events.map((event, index) => (
          <EventCard key={index} event={event} updateParticipants={updateParticipants}/>
        ))}
      </div>
    </div>
  );
};
export default Home;
