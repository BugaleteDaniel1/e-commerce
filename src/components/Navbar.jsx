import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { links } from "../assets/links";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import NavbarCSS from "../styles/navbar-styles/navbar.module.css";

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbar = useRef(null);
  const navContainer = useRef(null);

  useEffect(() => {
    const navHeight = navbar.current.getBoundingClientRect().height;
    if (window.innerWidth <= 440) {
      if (isNavbarOpen) {
        navContainer.current.style.height = `${navHeight}px`;
      } else {
        navContainer.current.style.height = "0px";
      }
    }
  }, [isNavbarOpen]);

  const handleOpenNav = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navLinks = links.map((link) => {
    return (
      <li key={nanoid()}>
        {link.icon}
        <Link className={NavbarCSS.navA} to={link.url}>
          {link.name}
        </Link>
      </li>
    );
  });
  return (
    <nav className={NavbarCSS.navBar}>
      <div className={NavbarCSS.navHeader}>
        <div className={NavbarCSS.navLogo}>Logo</div>
        <div onClick={handleOpenNav} className={NavbarCSS.navHamburger}>
          <FaBars />
        </div>
      </div>
      <div ref={navContainer} className={NavbarCSS.navLinksContainer}>
        <ul ref={navbar} className={NavbarCSS.navLinks}>
          {navLinks}
        </ul>
      </div>
    </nav>
  );
};
