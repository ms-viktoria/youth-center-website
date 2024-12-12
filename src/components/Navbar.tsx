import Logo from "../assets/images/Logo.png";

const Navbar = () => (

    <div className="navbar-container">
      <div className="header-container">
        <div className="header-container__logo">
          <img src={Logo} alt="Youth Center Logo" className="logo-icon" />
          <h1 className="logo-title">Suceava Youth Center</h1>
        </div>
        <p className="header-container__title">A spase for Romanians and Ukrainians youth</p>
      </div>
    </div>

);
export default Navbar;
