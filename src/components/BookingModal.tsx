import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";

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
  name: string;
  time: string;
}

export default function BookingModal({
  open,
  onClose,
  name,
  time,
}: BookingModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {time}
          </Typography>
        </div>
        <Input />
        <Typography sx={{ mt: 2 }}>
          This is a customizable Material-UI modal.
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={onClose}>
          Close Modal
        </Button>
      </Box>
    </Modal>
  );
}
