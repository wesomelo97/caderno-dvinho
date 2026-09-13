import { Link } from "react-router-dom";
import "./Learn.css";

const articles = [
  {
    id: 1,
    category: "Guia essencial",
    title: "Como começar a entender vinho de verdade",
    description:
      "Um caminho simples para reconhecer estilos, sabores e diferenças sem transformar cada taça numa aula chata.",
    slug: "como-comecar-a-entender-vinho",
    image: "/images/articles/article-01.png",
  },
  {
    id: 2,
    category: "Uvas",
    title: "Cabernet, Merlot, Malbec... o que realmente muda?",
    description:
      "Entenda como cada uva influencia aroma, corpo, intensidade e estilo do vinho.",
    slug: "diferencas-entre-uvas",
    image: "/images/articles/article-02.png",
  },
  {
    id: 3,
    category: "Harmonização",
    title: "Como combinar vinho e comida sem decorar regra",
    description:
      "Um jeito prático de pensar em harmonização usando intensidade, textura e equilíbrio.",
    slug: "harmonizacao-sem-regra",
    image: "/images/articles/article-03.png",
  },
];

export default function Learn() {
  return (
    <main className="learn-page">
      <section className="learn-page__hero">
        <Link to="/" className="learn-page__back">
          ← Voltar para a home
        </Link>

        <span>Caderno aberto</span>

        <h1>Aprenda sobre vinho sem virar refém de jargão.</h1>

        <p>
          Conteúdo pensado para transformar curiosidade em repertório e ajudar
          você a escolher melhor a próxima taça.
        </p>
      </section>

      <section className="learn-page__content">
        <div className="learn-page__intro">
          <span>Comece por aqui</span>
          <h2>Três caminhos para entender melhor o que você bebe.</h2>
        </div>

        <div className="learn-page__grid">
          {articles.map((article) => (
            <article key={article.id} className="learn-page-card">
                <Link
                    to={`/aprender/${article.slug}`}
                    className="learn-page-card__image"
                >
                    <img src={article.image} alt={article.title} />
                </Link>

                <div className="learn-page-card__content">
                    <span>{article.category}</span>

                    <h3>{article.title}</h3>

                    <p>{article.description}</p>

                    <Link to={`/aprender/${article.slug}`}>
                    Ler artigo →
                    </Link>
                </div>
                </article>
          ))}
        </div>
      </section>
    </main>
  );
}