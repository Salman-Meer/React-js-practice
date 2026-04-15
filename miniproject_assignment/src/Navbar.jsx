import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>HomePage</NavLink>
      <NavLink to="/Services">Services</NavLink>
      <NavLink to="/Reviews">Reviews</NavLink>
      <NavLink to="/Contact">Contact Us</NavLink>
    </nav>
  );
}

export default Navbar;