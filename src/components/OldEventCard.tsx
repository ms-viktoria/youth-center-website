export type Event = {
  name: string;
  description: string;
  time: string;
  image: string;
};

interface EventCardProps {
  event: Event;
}

const OldEventCard = ({ event }: EventCardProps) => {
  const { name, description, time, image } = event;

  return (
    <div className="event-card">
      <img src={image} alt={name} className="event-card__image" />
      <h3 className="event-card__name">{name}</h3>
      <p className="event-card__description">{description}</p>
      <p className="event-card__time">{time}</p>
    </div>
  );
};

export default OldEventCard;
