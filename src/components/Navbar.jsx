import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { links } from "../assets/links";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbar = useRef(null);
  const navContainer = useRef(null);

  useEffect(() => {
    const navHeight = navbar.current.getBoundingClientRect().height;
    if (isNavbarOpen) {
      navContainer.current.style.height = `${navHeight}px`;
    } else {
      navContainer.current.style.height = "0px";
    }
    console.log(navHeight);
  }, [isNavbarOpen]);

  const handleOpenNav = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navLinks = links.map((link) => {
    return (
      <li key={nanoid()}>
        {link.icon}
        <Link className="nav-a" to={link.url}>
          {link.name}
        </Link>
      </li>
    );
  });
  return (
    <nav className="nav-bar">
      <div className="nav-header">
        <div className="nav-logo">Logo</div>
        <div onClick={handleOpenNav} className="nav-hamburger">
          <FaBars />
        </div>
      </div>
      <div ref={navContainer} className="nav-links-container">
        <ul ref={navbar} className="nav-links">
          {navLinks}
        </ul>
      </div>
    </nav>
  );
};
