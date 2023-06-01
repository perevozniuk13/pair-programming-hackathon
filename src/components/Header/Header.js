import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
        <h1 className="header__title">TRACKER</h1>
        <h2 className="header__subtitle">By Sasha and Joe</h2>
    </header>
  );
  // return <nav className="nav">
  //   <Link to={"/"} className="nav__logo">Logo</Link>
  //   <Link to={"/user"} className="nav__library-logo">My Library / username465</Link>
  // </nav>
}