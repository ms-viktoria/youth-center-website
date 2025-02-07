import { useEffect, useState } from "react";
import EventCard from "../components/EventCard.tsx";
import axios from "axios";
import { Event } from "../types/event.ts";
import OpenModalSingIn from "../components/OpenModalSingIn.tsx"

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
    <>
      <div className="home__description-title">
        <p>
          Welcome to our Youth Center. We offer various programs and activities
          to help young people grow, learn, and thrive. Explore our events,
          activities, and community programs.
        </p>
      </div>
      <div className="event-grid">
        {events.map((event, index) => (
          <EventCard
            key={index}
            event={event}
            updateParticipants={updateParticipants}
            users={[]}
          />
        ))}

      </div>
      <OpenModalSingIn/>
    </>
  );
};
export default Home;
