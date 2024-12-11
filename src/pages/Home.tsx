import { useEffect, useState } from "react";
import EventCard, { Event } from "../components/Event";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="home">
      <p>
        Welcome to our Youth Center. We offer various programs and activities to
        help young people grow, learn, and thrive.Explore our events,
        activities, and community programs.
      </p>
      {/*<img src={Title} alt="Youth Center Title" className="image" />*/}
      <div className="event-section">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};
export default Home;
