import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");    
      const scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        if (
          scrollPos > section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
   
         <nav className="navbar">
      <div className="navbar-logo">🚀 Pavan</div>

      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={active === link ? 'active' : ''}
            onClick={() => setIsMobile(false)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>

      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        {/* {isMobile ? <FaTimes /> : <FaBars />} */}
        {isMobile ? <p> times </p> : <p>bars</p>}

      </div>
    </nav>
  );
   

};

export default Navbar;
