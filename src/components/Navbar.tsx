import logo from "../assets/images/logo_copy.jpg";
import OpenModalSingIn from "./OpenModalSingIn.tsx";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="header-container">
      <div className="header-container__logo">
        <img src={logo} alt="logo" className="header-container__logo__img" />
        <div className="header-container__title">Youth</div>
        <div className="header-container__title2">Center</div>
      </div>
      <div className="header-container__content">
      <button onClick={handleOpen}>Login/Sign Up</button>
      {open && (
        <OpenModalSingIn
          open={open}
          onClose={handleClose}
        />
      )}</div>
    </div>
  );
};

export default Navbar;
