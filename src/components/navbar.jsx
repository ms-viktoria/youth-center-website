import { Link } from "react-router-dom";
import logo from "../data/images/logo.png";

const Navbar = () => (
  <nav className="bg-blue-950 p-4 flex justify-between items-center">
    <img src={logo} />
    <h1 className="text-white text-3xl font-bold">Suceava Youth Centre</h1>
    <div>
      <Link to="/" className="text-white">
        Home
      </Link>
      <Link to="/programs" className="text-white">
        Programs
      </Link>
      <Link to="/events" className="text-white">
        Events
      </Link>
      <Link to="/contact" className="text-white">
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;
