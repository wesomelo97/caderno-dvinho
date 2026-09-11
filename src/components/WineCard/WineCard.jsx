import "./WineCard.css";
import { Link } from "react-router-dom";

export default function WineCard({ wine }) {
  return (
    <article className="wine-card">
      <div className="wine-card__image">
        <img src={wine.image} alt={wine.name} />
      </div>

      <div className="wine-card__content">
        <span className="wine-card__type">{wine.type}</span>

        <h3>{wine.name}</h3>

        <p className="wine-card__origin">{wine.origin}</p>

        <p className="wine-card__profile">{wine.profile}</p>

        <div className="wine-card__footer">
          <strong>
            {wine.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>

          <Link to={`/vinhos/${wine.slug}`}>Ver vinho</Link>
        </div>
      </div>
    </article>
  );
}