import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png"

const Navbar = () => (
  <nav>
    <img src={Logo} alt="Youth Center Logo" className="logo"/>
    <h1>Suceava Youth Center</h1>
    <p>A spase for Romanians and Ukrainians youth</p>

      <div>
          <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
          >
              Home
          </NavLink>
      </div>



  </nav>
);
export default Navbar;
