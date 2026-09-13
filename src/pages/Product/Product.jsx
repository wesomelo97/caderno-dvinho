import { useParams, Link } from "react-router-dom";
import { wines } from "../../data/wines";
import "./Product.css";
import { useCart } from "../../context/CartContext.jsx";

export default function Product() {
  const { addToCart } = useCart();
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
        <Link to="/" className="product__back">
          ← Voltar
        </Link>

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

        <button
            className="product__button"
            onClick={() => addToCart(wine)}
          >
            Adicionar ao carrinho
        </button>
      </div>
    </main>
  );
}