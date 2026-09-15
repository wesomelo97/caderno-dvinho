import { Link } from "react-router-dom";
import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Header variant="solid" />
      <main className="about">
      <section className="about__hero">
        <Link to="/" className="about__back">
          ← Voltar para a home
        </Link>

        <span>Sobre a Caderno D'Vinho</span>

        <h1>Vinho não precisa parecer um clube fechado.</h1>

        <p>
          A Caderno D'Vinho nasceu para aproximar pessoas curiosas do universo
          do vinho através de descoberta, repertório e experiência.
        </p>
      </section>

      <section className="about__problem">
        <div>
          <span>O problema</span>
          <h2>Escolher vinho ainda parece mais difícil do que deveria.</h2>
        </div>

        <div>
          <p>
            Uvas, regiões, safras, harmonizações e dezenas de rótulos podem
            transformar uma escolha simples em algo intimidador.
          </p>

          <p>
            Em vez de partir do conhecimento técnico, preferimos começar pela
            pergunta mais importante: o que você gosta?
          </p>
        </div>
      </section>

      <section className="about__philosophy">
        <span>Nossa ideia</span>

        <h2>Descubra seu gosto. Construa seu repertório.</h2>

        <div className="about__principles">
          <article>
            <strong>01</strong>
            <h3>Descoberta</h3>
            <p>
              Experimentar novos estilos sem precisar saber tudo antes.
            </p>
          </article>

          <article>
            <strong>02</strong>
            <h3>Contexto</h3>
            <p>
              Entender por que um vinho é diferente e o que procurar na taça.
            </p>
          </article>

          <article>
            <strong>03</strong>
            <h3>Repertório</h3>
            <p>
              Cada experiência ajuda você a fazer escolhas melhores depois.
            </p>
          </article>
        </div>
      </section>

      <section className="about__ecosystem">
        <div>
          <span>Uma experiência conectada</span>
          <h2>Do balcão à tela.</h2>
        </div>

        <div className="about__ecosystem-list">
          <div>
            <strong>Wine bar</strong>
            <p>Provar, comparar e conversar.</p>
          </div>

          <div>
            <strong>Adega</strong>
            <p>Levar para casa aquilo que fez sentido.</p>
          </div>

          <div>
            <strong>Wine Finder</strong>
            <p>Encontrar rótulos a partir do próprio gosto.</p>
          </div>

          <div>
            <strong>Conteúdo</strong>
            <p>Continuar aprendendo fora da taça.</p>
          </div>
        </div>
      </section>

      <section className="about__cta">
        <span>Comece por você</span>
        <h2>O próximo vinho pode ensinar alguma coisa.</h2>

        <div className="about__actions">
          <Link to="/vinhos">Explorar vinhos</Link>
          <Link to="/#wine-finder">Descobrir meu perfil</Link>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}