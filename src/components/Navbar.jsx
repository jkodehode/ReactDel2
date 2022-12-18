import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEdge } from "@fortawesome/free-brands-svg-icons";

import "./Navbar.css";

const Navbar = () => {
  const linkIcon = faEdge;
  return (
    <>
      <ul className="menu-bar">
        <MenuItem icon={linkIcon} />
        <MenuItem icon={linkIcon} />
        <MenuItem icon={linkIcon} />
        <MenuItem icon={linkIcon} />
        <MenuItem icon={linkIcon} />
      </ul>
    </>
  );
};

const MenuItem = ({ icon }) => {
  return (
    <li className="nav-link">
      <FontAwesomeIcon className="menuItem" icon={icon} />
    </li>
  );
};

export default Navbar;
