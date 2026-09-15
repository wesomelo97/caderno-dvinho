import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { wines } from "../../data/wines";
import { useCart } from "../../context/CartContext.jsx";
import "./Product.css";
import { ShoppingCart } from "lucide-react";

export default function Product() {
  const { addToCart, cartCount } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { slug } = useParams();

  const wine = wines.find((item) => item.slug === slug);

  if (!wine) {
    return (
      <main className="product-not-found">
        <h1>Vinho não encontrado</h1>
        <Link to="/">Voltar para a home</Link>
      </main>
    );
  }

  return (
    <main className="product">
      <div className="product__image">
                <img src={wine.image} alt={wine.name} />
              </div>

              <div className="product__content">
                <div className="product__topbar">
          <Link to="/vinhos" className="product__back">
            ← Voltar aos vinhos
          </Link>

          <Link to="/carrinho" className="product__cart-button">
            <ShoppingCart size={18} strokeWidth={1.7} />
            <span>Carrinho</span>
            <strong>{cartCount}</strong>
          </Link>
        </div>

        <span className="product__type">{wine.type}</span>

        <h1>{wine.name}</h1>

        <p className="product__origin">{wine.origin}</p>

        <p className="product__description">{wine.description}</p>

        <div className="product__tags">
          {wine.profile.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <strong className="product__price">
          {wine.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>

        <div className="product__purchase">
          <div className="product__quantity">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>

            <strong>{quantity}</strong>

            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            className="product__button"
            onClick={() => {
              for (let i = 0; i < quantity; i++) {
                addToCart(wine);
              }

              setQuantity(1);
            }}
          >
            Adicionar ao carrinho
          </button>
        </div>

      
      </div>
    </main>
  );
}