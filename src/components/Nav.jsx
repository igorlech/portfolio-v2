import "../styles/navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../assets/logomain.png";

export default function Nav() {
  function toggleNavbar() {
    const navbar = document.querySelector(".navbar-content");
    navbar.classList.toggle("navbar-open");
  }

  return (
    <header className="navbar" id="navbar">
      <button className="navbar-burger-btn" onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav className="navbar-content">
        <div className="navbar-logo-container">
          <NavLink to="/" end>
            <img src={logo} className="navbar-logo" alt="Navbar Logo" />
          </NavLink>
        </div>
        <div className="navbar-links">
          <NavLink to="/about" className="navbar-link">
            My journey
          </NavLink>
          <NavLink to="/contact" className="navbar-link">
            Let&#39;s talk!
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
