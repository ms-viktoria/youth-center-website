import { useEffect, useState } from "react";
import EventCard, { Event } from "../components/EventCard.tsx";
import axios from "axios";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="home">
      <p className="home__about">
        Welcome to our Youth Center. We offer various programs and activities to
        help young people grow, learn, and thrive.Explore our events,
        activities, and community programs.
      </p>
      <div className="event-grid">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};
export default Home;