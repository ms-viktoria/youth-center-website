import logo from "../assets/images/logo_copy.jpg";
import React, { useState } from "react";
import LoginSignUp from "./LoginSingUp.tsx";


/*const Navbar = () => (
  <div className="header-container">
    <div className="header-container__logo">
      <img src={logo} alt="logo" className="header-container__logo__img"/>
      <div className="header-container__title">Youth </div>
      <div className="header-container__title2">Center</div>
      </div>
  </div>
);*/

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false); // Manage modal visibility
  const [isSignUp, setIsSignUp] = useState(false); // Manage form flip state

  const handleOpen = (signUp: boolean) => {
    setIsSignUp(signUp);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={() => handleOpen(false)}>Login</button>
      <button onClick={() => handleOpen(true)}>Sign Up</button>
      {open && (
        <LoginSignUp
          isSignUp={isSignUp}
          onClose={handleClose}
        />
      )}
      <div className="header-container">
        <div className="header-container__logo">
          <img src={logo} alt="logo" className="header-container__logo__img"/>
          <div className="header-container__title">Youth</div>
          <div className="header-container__title2">Center</div>
        </div>
      </div>
    </div>


  );
};

export default Navbar;
