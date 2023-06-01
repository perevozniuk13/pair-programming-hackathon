import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return <nav className="nav">
    <Link to={"/"} className="nav__logo">Logo</Link>
    <Link to={"/user"} className="nav__library-logo">My Library / username465</Link>
  </nav>
}