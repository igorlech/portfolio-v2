import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";

export default function Nav() {
  return (
    <header className="navbar" id="navbar">
      <button className="navbar-burger-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav>
        <div className="navbar-title">
          <NavLink to="/" end>
            <img src="#" className="navbar-logo" alt="Navbar Logo" />
          </NavLink>
        </div>
        <div className="navbar-links">
          <NavLink to="/about">My journey</NavLink>
          <NavLink to="/contact">Let&#39;s talk!</NavLink>
        </div>
      </nav>
    </header>
  );
}
