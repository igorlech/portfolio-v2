import "../styles/navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../assets/logomain.png";

export default function Nav() {
  function toggleNavbar() {
    const navbar = document.querySelector(".navbar-content");
    const burgerBtn = document.querySelector(".navbar-burger-btn");

    navbar.classList.toggle("navbar-open");
    burgerBtn.classList.toggle("burger-clicked");

    if (navbar.classList.contains("navbar-open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <header className="navbar" id="navbar">
      <button className="navbar-burger-btn" onClick={toggleNavbar}>
        <div id="burger-line-1"></div>
        <div id="burger-line-2"></div>
        <div id="burger-line-3"></div>
      </button>
      <nav className="navbar-content">
        <div className="navbar-logo-container">
          <NavLink to="/" end>
            <img src={logo} className="navbar-logo" alt="Navbar Logo" />
          </NavLink>
        </div>
        <div className="navbar-links">
          <NavLink to="/about" className="navbar-link">
            About me
          </NavLink>
          <NavLink to="/contact" className="navbar-link">
            Let&#39;s talk!
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
