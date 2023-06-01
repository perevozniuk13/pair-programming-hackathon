import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div>
      <Link to={"/"} className="header__title">TRACKER</Link>
      <h2 className="header__subtitle">By Sasha and Joe</h2>
      </div>


<div>
        <Link to={"/user"} className="header__library-logo">My Library</Link>
        <h2 className="header__library-user">username465</h2>
        </div>
    </header>
  );
  // return <nav className="nav">
  //   <Link to={"/"} className="nav__logo">Logo</Link>
  //   <Link to={"/user"} className="nav__library-logo">My Library / username465</Link>
  // </nav>
}