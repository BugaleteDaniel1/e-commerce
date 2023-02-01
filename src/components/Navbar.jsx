import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-header">
        <div className="nav-logo">Logo</div>
        <div className="nav-hamburger">
          <FaBars />
        </div>
      </div>
      <ul className="nav-links">
        <li>dadas</li>
        <li>dadsa</li>
        <li>dsadsa</li>
      </ul>
    </nav>
  );
};
