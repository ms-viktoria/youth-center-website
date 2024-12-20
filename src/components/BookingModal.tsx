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
  const [gender, setGender] = useState("");

  const handleButtonClick = () => {
    updateParticipants(event, name);
    onClose();
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <div className="booking-modal">
          <span className="booking-modal__close-button" onClick={onClose}>
            ×
          </span>
          <div className="booking-modal__header">
            <div className="header__title">{title}</div>
            <div className="header__time">{time}</div>
          </div>
          <div className="booking-modal__form">
            <div className="booking-modal__form-row">
              <Input
                className="form-row__input input-name"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-row__input input-age"
                type="number"
                id="age"
                name="age"
                min="1"
                max="120"
                placeholder="Age"
                required
              />
            </div>
            <div className="booking-modal__form-row">
              <div className="form-row__input input-gender">
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <option value="other">Other</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <input
                className="form-row__input input-phone"
                type="tel"
                id="phone"
                name="phone"
                placeholder="+123-456-7890"
                required
              />
            </div>
          </div>

          <div className="booking-modal__submit-button-wrapper">
            <button
              className="booking-modal__submit-button"
              onClick={handleButtonClick}
            >
              Submit
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
