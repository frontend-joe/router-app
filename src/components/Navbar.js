import { NavLink } from "react-router-dom";

export default () => (
  <nav>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink exact to="/about">
      About
    </NavLink>
    <NavLink exact to="/contact">
      Contact
    </NavLink>
  </nav>
);
