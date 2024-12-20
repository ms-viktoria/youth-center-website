import logo from "../assets/images/logo_copy.jpg";

const Navbar = () => (
  <div className="header-container">
    <div className="header-container__logo">
      <img src={logo} alt="logo" className="header-container__logo__img" />
      <div className="header-container__title">Youth Center</div>
      {/*<div className="header-container__subtype">space for youth</div>*/}
    </div>
  </div>
);
export default Navbar;
