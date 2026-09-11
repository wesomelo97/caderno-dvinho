import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">Caderno D'Vinho</div>

      <nav className="header__nav">
        <Link to="/vinhos">Vinhos</Link>
        <a href="#wine-finder">Wine Finder</a>
        <a href="#experiencias">Experiências</a>
        <a href="#aprender">Aprender</a>
      </nav>

      <button className="header__button">Explorar vinhos</button>
    </header>
  );
}