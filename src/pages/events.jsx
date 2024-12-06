import EventCard from '../components/event-card.jsx';
import  GlowParty  from "../data/images/GlowParty.jpg";
import Sushi from "../data/images/Sushi.jpeg";

const events = [
  { name: "Cooking Workshop", description: "Time to sushi made.", date: "14th December 2024", image: Sushi },
{ name: "Youth Festival", description: "A day of fun and games! GLOW party!", date: "22th December 2024", image: GlowParty },
];


const Events = () => (
  <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
    <div className="grid gap-4">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  </div>
);
  
  export default Events;