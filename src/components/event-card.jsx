const EventCard = ({ event }) => (
  <div className="flex items-center justify-between">
  <div className="border p-4 rounded shadow-md">
    <h3 className="text-xl font-bold">{event.name}</h3>
    <p>{event.description}</p>
    <span className="text-sm text-gray-500">{event.date}</span>
    <div><img 
      src={event.image} 
      alt={event.name} 
      className="size-full object-cover rounded mb-4"/>
      </div>
    </div>
  </div>
);

export default EventCard;
