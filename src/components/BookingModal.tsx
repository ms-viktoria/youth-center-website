import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import { Event } from "../types/event.ts";
import { useState } from "react";

const modalStyle = {
  position: "absolute",
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
        <div className="booking-modal">
          <span className="booking-modal__close-button" onClick={onClose}>
            ×
          </span>
          <div className="box">
            <Typography
              className="box__title"
              gutterBottom
              variant="subtitle1"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              className="box__time"
              gutterBottom
              variant="subtitle1"
              component="div"
            >
              {time}
            </Typography>
          </div>
          <Input
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            }}
            className="modal__placeholder"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input className="modal__age"
                 type="number"
                 id="age"
                 name="age"
                 min="1"
                 max="120"
                 placeholder="Age"
                 required
          />
          <Input className="modal__phone"
                 type="tel"
                 id="phone"
                 name="phone"
                 placeholder="123-456-7890"
                 required
          />


          <div className="booking-modal">
            <span className="booking-modal__submit-button" onClick={onSubmit}>
              Submit
            </span>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
