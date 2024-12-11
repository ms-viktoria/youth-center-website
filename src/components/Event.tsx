export type Event = {
  name: string;
  description: string;
  schedule: string;
  image: string;
};

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const { name, description, schedule, image } = event;

  return (
    <div className="event-card">
      <img src={image} alt={name} className={image} />
      <h3 className="event-card__name">{name}</h3>
      <p className="event-card__description">{description}</p>
      <p className="event-card__schedule">{schedule}</p>
    </div>
  );
};

export default EventCard;
