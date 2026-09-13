import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">Caderno D'Vinho</div>

      <nav className="header__nav">
        <Link to="/vinhos">Vinhos</Link>
        <a href="#wine-finder">Wine Finder</a>
        <Link to="/experiencias">Experiências</Link>
        <Link to="/aprender">Aprender</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      <button className="header__button">Explorar vinhos</button>
    </header>
  );
}