import { Link, useParams } from "react-router-dom";
import { articles } from "../../data/articles";
import "./Article.css";

export default function Article() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="article-not-found">
        <h1>Artigo não encontrado</h1>
        <Link to="/aprender">Voltar para Aprender</Link>
      </main>
    );
  }

  return (
    <main className="article">
      <section className="article__hero">
        <div className="article__hero-content">
          <Link to="/aprender">← Voltar para Aprender</Link>

          <span>{article.category}</span>

          <h1>{article.title}</h1>

          <p>{article.intro}</p>
        </div>

        <div className="article__hero-image">
          <img src={article.image} alt={article.title} />
        </div>
      </section>

      <article className="article__content">
        {article.sections.map((section) => (
          <section key={section.title} className="article__section">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}

        <div className="article__closing">
          <span>Caderno D'Vinho</span>
          <h2>Aprender vinho é construir repertório, uma taça por vez.</h2>

          <div>
            <Link to="/vinhos">Explorar vinhos</Link>
            <Link to="/#wine-finder">Usar o Wine Finder</Link>
          </div>
        </div>
      </article>
    </main>
  );
}