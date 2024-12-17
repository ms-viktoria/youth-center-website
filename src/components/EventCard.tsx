import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookingModal from "./BookingModal.tsx";
import { useState } from "react";
import { Event } from "../types/event.ts"

interface EventCardProps {
  event: Event;
  updateParticipants: (event: Event, participantNane: string) => void;
}

export default function EventCard({ event, updateParticipants }: EventCardProps) {
  const { title, description, time, image, participants } = event;
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {time}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {participants.map(p => p.name).join(', ')}
        </Typography>
      </CardContent>
      <CardActions className="button">
        <Button className="button__book" onClick={handleOpen}>
          Book Now
        </Button>
      </CardActions>
      <BookingModal open={open} onClose={handleClose} event={event} updateParticipants={updateParticipants}/>
    </Card>
  );
}
