import Header from "../../components/Header/Header";
import "./Home.css";
import WineCard from "../../components/WineCard/WineCard";
import { wines } from "../../data/wines";
import WineFinder from "../../components/WineFinder/WineFinder";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
    
    <main>
      <section className="hero">
        <Header variant="overlay" />

        <div className="hero__overlay"></div>

        <div className="hero__content">
          <span className="hero__eyebrow">Wine house & adega</span>

          <h1>Caderno D'Vinho</h1>

          <p>
            Descubra seu gosto.
            <br />
            Construa seu repertório.
          </p>

          <div className="hero__actions">
            <a href="#wine-finder" className="button button--primary">
              Descobrir meu vinho
            </a>

            <a href="#vinhos" className="button button--secondary">
              Explorar rótulos
            </a>
          </div>
        </div>
      </section>

        <section className="intro">
            <div className="intro__content">
                <span className="intro__eyebrow">Nosso jeito de falar sobre vinho</span>

                <h2>Vinho sem complicação.</h2>

                <p>
                Escolher um vinho não deveria parecer uma prova. A Caderno D'Vinho
                existe para ajudar você a entender melhor o que gosta, descobrir novos
                rótulos e construir repertório no seu ritmo.
                </p>
            </div>

            <div className="intro__highlights">
                <div>
                <strong>01</strong>
                <span>Descubra seu perfil</span>
                </div>

                <div>
                <strong>02</strong>
                <span>Experimente novos estilos</span>
                </div>

                <div>
                <strong>03</strong>
                <span>Entenda o que está bebendo</span>
                </div>
            </div>
        </section>

        <WineFinder />

      <section id="vinhos" className="selection">
            <div className="selection__header">
                <div>
                <span className="selection__eyebrow">Curadoria da casa</span>
                <h2>Seleção da Casa</h2>
                </div>

                <Link to="/vinhos">Ver todos os vinhos →</Link>
            </div>

            <div className="selection__grid">
                {wines.slice(0, 3).map((wine) => (
                    <WineCard key={wine.id} wine={wine} />
                ))}
            </div>
      </section>

      <section id="experiencias" className="experiences">
            <div className="experiences__header">
                <span className="experiences__eyebrow">Além da garrafa</span>
                <h2>Experiências para aprender bebendo.</h2>
            </div>

            <div className="experiences__grid">
                <article className="experience-card">
                <span>01</span>
                <h3>Degustação guiada</h3>
                <p>
                    Prove diferentes estilos de vinho e entenda, na prática, o que muda
                    entre uvas, regiões e perfis de sabor.
                </p>
                <Link to="/experiencias">Conhecer experiência →</Link>
                </article>

                <article className="experience-card">
                <span>02</span>
                <h3>Noite de harmonização</h3>
                <p>
                    Uma experiência entre vinho e gastronomia para descobrir como sabores
                    podem se complementar.
                </p>
                <Link to="/experiencias">Conhecer experiência →</Link>
                </article>

                <article className="experience-card">
                <span>03</span>
                <h3>Descobertas da casa</h3>
                <p>
                    Encontros temáticos com rótulos, regiões e estilos escolhidos pela
                    curadoria da Caderno D'Vinho.
                </p>
                <Link to="/experiencias">Conhecer experiência →</Link>
                </article>
            </div>
        </section>

      <section id="aprender" className="learn">
            <div className="learn__header">
                <span className="learn__eyebrow">Caderno aberto</span>
                <h2>Aprenda sobre vinho sem virar refém de jargão.</h2>
            </div>

            <div className="learn__grid">
                <article className="learn-card learn-card--featured">
                <span>Guia essencial</span>
                <h3>Como começar a entender vinho de verdade</h3>
                <p>
                    Um caminho simples para reconhecer estilos, sabores e diferenças sem
                    transformar cada taça numa aula chata.
                </p>
                <a href="#">Ler artigo →</a>
                </article>

                <article className="learn-card">
                <span>Uvas</span>
                <h3>Cabernet, Merlot, Malbec... o que realmente muda?</h3>
                <Link to="/aprender">Explorar →</Link>
                </article>

                <article className="learn-card">
                <span>Harmonização</span>
                <h3>Como combinar vinho e comida sem decorar regra</h3>
                <Link to="/aprender">Explorar →</Link>
                </article>

                <article className="learn-card">
                <span>Degustação</span>
                <h3>O que observar numa taça além de “gostei” ou “não gostei”</h3>
                <Link to="/aprender">Explorar →</Link>
                </article>
            </div>
        </section>

      <section className="manifesto">
            <div className="manifesto__content">
                <span className="manifesto__eyebrow">Nosso manifesto</span>

                <h2>Vinho não precisa ser complicado.</h2>

                <p>
                Não acreditamos que você precise decorar termos, regiões ou regras para
                apreciar uma boa taça. Acreditamos em curiosidade, repertório e
                descoberta. Cada vinho é uma nova página.
                </p>

                <Link to="/sobre">Conheça a Caderno D'Vinho →</Link>
            </div>
        </section>
    </main>

    <Footer />
    </>
  );
}