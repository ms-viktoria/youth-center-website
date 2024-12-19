import Box from "@mui/material/Box";
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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleButtonClick = () => {
    updateParticipants(event, name);
    onClose();

    if (isChecked) {
      alert("You will be remembered!");
    } else {
      alert("You will not be remembered!");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <div className="booking-modal">
          <span className="booking-modal__close-button" onClick={onClose}>
            ×
          </span>
          <div className="box">
            <div className="box__title">{title}</div>
            <div className="box__time">{time}</div>
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
          <input
            className="modal__age"
            type="number"
            id="age"
            name="age"
            min="1"
            max="120"
            placeholder="Age"
            required
          />

          <input
            className="modal__phone"
            type="tel"
            id="phone"
            name="phone"
            placeholder="+123-456-7890"
            required
          />
          <input
            className="modal__gender"
            type="radio"
            id="gender"
            name="gender"
            placeholder="gender"
            required
          />
          <div className="booking-modal">
            <span
              className="booking-modal__submit-button"
              onClick={handleButtonClick}
            >
              Submit
            </span>
            <div
              className="remember-me"
            >
              <label
                className="remember-me__field"
              >
                <input
                  className="remember-me__checkbox"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                Remember Me
              </label>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
