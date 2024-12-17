import logo from "../assets/images/logo_copy.jpg";
// import join from "../assets/images/join.png";


const Navbar = () => (

    <div className="navbar-container">
      <div className="header-container">
        <div className="header-container__logo">
          <img src={logo} alt="Youth Center Logo" className="logo-icon" />
          <h1 className="logo-title">Youth Center</h1>
        </div>
        <p className="header-container__title">A spase for youth
          {/*<img src={join} alt="Youth Center Join" className="join-icon"/>*/}
        </p>
      </div>
    </div>

);
export default Navbar;
