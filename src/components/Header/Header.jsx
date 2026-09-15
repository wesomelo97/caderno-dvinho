import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";
import "./Header.css";

export default function Header({ variant = "solid" }) {
  const { cartCount } = useCart();

  return (
    <header className={`header header--${variant}`}>
      <Link to="/" className="header__brand">
        Caderno D'Vinho
      </Link>

      <nav className="header__nav">
        <Link to="/vinhos">Vinhos</Link>
        <Link to="/experiencias">Experiências</Link>
        <Link to="/aprender">Aprender</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      <Link to="/carrinho" className="header__cart">
        <ShoppingCart size={18} strokeWidth={1.7} />
        <span>Carrinho</span>

        {cartCount > 0 && (
          <strong>{cartCount}</strong>
        )}
      </Link>
    </header>
  );
}