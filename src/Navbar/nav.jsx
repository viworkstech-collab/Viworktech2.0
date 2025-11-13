import React, { useState } from "react";           // ✅ Add this line
import { NavLink } from "react-router-dom";
import "./nav.css";
import '@fontsource/montserrat/800.css';


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">Viworkstech</div>

      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}    {/* ✅ Toggle between hamburger and X */}
      </button>

      {/* Navigation Links */}
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink></li>
        <li><NavLink to="/portfolio" onClick={() => setOpen(false)}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
        <li>
          <a className="cta" href="/contact" onClick={() => setOpen(false)}>
            GET IN TOUCH
          </a>
        </li>
      </ul>
    </header>
  );
}
