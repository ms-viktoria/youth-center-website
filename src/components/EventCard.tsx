import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookingModal from "./BookingModal.tsx";
import { useState } from "react";

export type Event = {
  name: string;
  description: string;
  time: string;
  image: string;
  participants: string[];
};

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const { name, description, time, image } = event;
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {time}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleOpen}>
          Open Modal
        </Button>
      </CardActions>
      <BookingModal open={open} onClose={handleClose} name={name} time={time} />
    </Card>
  );
}
