import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import { Event } from "../types/event.ts";
import { useState } from "react";

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  event: Event;
  updateParticipants: (event: Event, participantNane: string) => void;
}

export default function BookingModal({
  open,
  onClose,
  event,
  updateParticipants,
}: BookingModalProps) {
  const { title, time } = event;
  const [name, setName] = useState("");

  const onSubmit = () => {
    updateParticipants(event, name);
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {time}
          </Typography>
        </div>
        <Input
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Typography sx={{ mt: 2 }}>
          This is a customizable Material-UI modal.
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={onClose}>
          Close
        </Button>
        <Button variant="contained" sx={{ mt: 2 }} onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
}
