import { NavLink } from "react-router-dom";
import "./NavLinks.css";

export const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li><NavLink to={ "/" } exact>ALL LINKS</NavLink></li>
      <li><NavLink to={ "/ud1/places" }>MY PLACES</NavLink></li>
      <li><NavLink to={ "/places/new" }>ADD PLACE</NavLink></li>
      <li><NavLink to={ "/auth" }>AUTHENTICATE</NavLink></li>
    </ul>
  );
};
