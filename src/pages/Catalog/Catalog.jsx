import { useState } from "react";
import { Link } from "react-router-dom";
import { wines } from "../../data/wines";
import WineCard from "../../components/WineCard/WineCard";
import "./Catalog.css";

export default function Catalog() {
  const [typeFilter, setTypeFilter] = useState("Todos");

  const filteredWines =
    typeFilter === "Todos"
      ? wines
      : wines.filter((wine) => wine.type === typeFilter);

    const types = ["Todos", "Tinto", "Branco", "Rosé", "Espumante"];

  return (
    <main className="catalog">
      <section className="catalog__hero">
        <Link to="/" className="catalog__back">
          ← Voltar para a home
        </Link>

        <span>Nosso caderno de rótulos</span>

        <h1>Explore os vinhos</h1>

        <p>
          Descubra estilos, origens e perfis diferentes. Escolha pelo que faz
          sentido para você, não pelo que parece mais complicado.
        </p>
      </section>

      <section className="catalog__content">
        <div className="catalog__toolbar">
          <div className="catalog__filters">
            {types.map((type) => (
              <button
                key={type}
                className={typeFilter === type ? "active" : ""}
                onClick={() => setTypeFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <span className="catalog__count">
            {filteredWines.length}{" "}
            {filteredWines.length === 1 ? "vinho" : "vinhos"}
          </span>
        </div>

        <div className="catalog__grid">
          {filteredWines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </section>
    </main>
  );
}