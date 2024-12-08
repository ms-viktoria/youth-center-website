import { Link } from "react-router-dom";
import logo from "../data/images/logo.png";

const Navbar = () => (
  <nav className="bg-blue-950 p-4 flex justify-between items-center">
    <img src={logo} className="w-20 object-cover rounded-full"/>
    <h1 className="text-white text-3xl font-bold first-line:uppercase">Suceava Youth Centre</h1>
    <div className="text-sm hover:file:bg-violet-100">
      <Link to="/" className="text-white px-2">
        Home
      </Link>
      <Link to="/programs" className="text-white px-2">
        Programs
      </Link>
      <Link to="/events" className="text-white px-2">
        Events
      </Link>
      <Link to="/contact" className="text-white px-2">
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;
