import { useState } from "react";
import { Link } from "react-router-dom";
import { wines } from "../../data/wines";
import WineCard from "../../components/WineCard/WineCard";
import "./Catalog.css";
import { useCart } from "../../context/CartContext.jsx";
import { ShoppingCart } from "lucide-react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Catalog() {
  const { cartCount } = useCart();
  const [typeFilter, setTypeFilter] = useState("Todos");
  const [profileFilter, setProfileFilter] = useState("Todos");
  const [occasionFilter, setOccasionFilter] = useState("Todos");

  const types = ["Todos", "Tinto", "Branco", "Rosé", "Espumante"];

  const profiles = [
    "Todos",
    "Leve",
    "Equilibrado",
    "Intenso",
    "Frutado",
    "Seco",
    "Fresco",
  ];

  const occasions = [
    "Todos",
    "Jantar",
    "Relaxar",
    "Presente",
    "Experimentar algo novo",
  ];

  const filteredWines = wines.filter((wine) => {
    const matchesType =
      typeFilter === "Todos" || wine.type === typeFilter;

    const matchesProfile =
      profileFilter === "Todos" ||
      wine.profile.includes(profileFilter);

    const matchesOccasion =
      occasionFilter === "Todos" ||
      wine.occasions.includes(occasionFilter);

    return matchesType && matchesProfile && matchesOccasion;
  });

  function clearFilters() {
    setTypeFilter("Todos");
    setProfileFilter("Todos");
    setOccasionFilter("Todos");
  }

  return (
    <>
      <Header variant="solid" />
      <main className="catalog">
      <section className="catalog__hero">
        <div className="catalog__topbar">
          <Link to="/" className="catalog__back">
            ← Voltar para a home
          </Link>

        </div>

        <span>Nosso caderno de rótulos</span>

        <h1>Explore os vinhos</h1>

        <p>
          Descubra estilos, origens e perfis diferentes. Escolha pelo que faz
          sentido para você, não pelo que parece mais complicado.
        </p>
      </section>

      <section className="catalog__content">
        <div className="catalog__filter-group">
          <span className="catalog__filter-label">Tipo</span>

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
        </div>

        <div className="catalog__filter-group">
          <span className="catalog__filter-label">Perfil</span>

          <div className="catalog__filters">
            {profiles.map((profile) => (
              <button
                key={profile}
                className={profileFilter === profile ? "active" : ""}
                onClick={() => setProfileFilter(profile)}
              >
                {profile}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog__filter-group">
          <span className="catalog__filter-label">Ocasião</span>

          <div className="catalog__filters">
            {occasions.map((occasion) => (
              <button
                key={occasion}
                className={occasionFilter === occasion ? "active" : ""}
                onClick={() => setOccasionFilter(occasion)}
              >
                {occasion}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog__results-bar">
          <span>
            {filteredWines.length}{" "}
            {filteredWines.length === 1 ? "vinho encontrado" : "vinhos encontrados"}
          </span>

          <button onClick={clearFilters}>Limpar filtros</button>
        </div>

        {filteredWines.length > 0 ? (
          <div className="catalog__grid">
            {filteredWines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        ) : (
          <div className="catalog__empty">
            <h2>Nenhum vinho por aqui.</h2>
            <p>
              Tenta combinar outros filtros ou limpa a seleção para continuar
              explorando.
            </p>

            <button onClick={clearFilters}>Limpar filtros</button>
          </div>
        )}
      </section>
      </main>
      <Footer />
    </>
  );
}