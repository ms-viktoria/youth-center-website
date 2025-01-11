import { useState } from "react";
import { Event } from "../types/event.ts";
import BookingModal from "./BookingModal.tsx";
import UserIcons from "./UserIcons.tsx";

interface EventCardProps {
  event: Event;
  updateParticipants: (event: Event, participantName: string) => void;
  users: { name: string }[];
}

const EventCard = ({ event, updateParticipants }: EventCardProps) => {
  const { title, description, time, image, participants } = event;
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="event-card" onClick={handleOpen}>
        <h3 className="event-card__name">{title}</h3>
        <img src={image} alt={title} className="event-card__image" />

        <div className="event-card__content">
          <div>
            <p className="content__time">{time}</p>
            <p className="content__description">{description}</p>
          </div>

          <UserIcons users={participants} />
        </div>
      </div>
      <BookingModal
        open={open}
        onClose={handleClose}
        event={event}
        updateParticipants={updateParticipants}
      />
    </>
  );
};

export default EventCard;
