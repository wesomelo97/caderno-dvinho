import "./Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const { cartCount } = useCart();
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
      <Link to="/carrinho" className="header__cart">
         Carrinho ({cartCount})
      </Link>
      <button className="header__button">Explorar vinhos</button>
    </header>
  );
}