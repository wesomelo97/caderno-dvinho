import Header from "../../components/Header/Header";
import "./Home.css";
import WineCard from "../../components/WineCard/WineCard";
import { wines } from "../../data/wines";

export default function Home() {
  return (
    <>
    <main>
      <section className="hero">
        <Header />

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

        <section id="wine-finder" className="finder">
        <div className="finder__intro">
            <span className="finder__eyebrow">Wine Finder</span>

            <h2>Encontre um vinho que combine com você.</h2>

            <p>
            Não precisa decorar uva, região ou safra. Comece pelo que você gosta,
            pela ocasião e pelo tipo de experiência que procura.
            </p>
        </div>

        <div className="finder__panel">
            <div className="finder__step">
            <span>01</span>
            <h3>Como você prefere?</h3>

            <div className="finder__options">
                <button>Leve</button>
                <button>Encorpado</button>
                <button>Frutado</button>
                <button>Seco</button>
            </div>
            </div>

            <div className="finder__footer">
            <p>Leva menos de 1 minuto.</p>
            <button className="finder__button">Começar descoberta</button>
            </div>
        </div>
        </section>

      <section id="vinhos" className="selection">
            <div className="selection__header">
                <div>
                <span className="selection__eyebrow">Curadoria da casa</span>
                <h2>Seleção da Casa</h2>
                </div>

                <a href="#">Ver todos os vinhos →</a>
            </div>

            <div className="selection__grid">
                {wines.map((wine) => (
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
                <a href="#">Conhecer experiência →</a>
                </article>

                <article className="experience-card">
                <span>02</span>
                <h3>Noite de harmonização</h3>
                <p>
                    Uma experiência entre vinho e gastronomia para descobrir como sabores
                    podem se complementar.
                </p>
                <a href="#">Conhecer experiência →</a>
                </article>

                <article className="experience-card">
                <span>03</span>
                <h3>Descobertas da casa</h3>
                <p>
                    Encontros temáticos com rótulos, regiões e estilos escolhidos pela
                    curadoria da Caderno D'Vinho.
                </p>
                <a href="#">Conhecer experiência →</a>
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
                <a href="#">Explorar →</a>
                </article>

                <article className="learn-card">
                <span>Harmonização</span>
                <h3>Como combinar vinho e comida sem decorar regra</h3>
                <a href="#">Explorar →</a>
                </article>

                <article className="learn-card">
                <span>Degustação</span>
                <h3>O que observar numa taça além de “gostei” ou “não gostei”</h3>
                <a href="#">Explorar →</a>
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

                <a href="#">Conheça a Caderno D'Vinho →</a>
            </div>
        </section>
    </main>

    <footer className="footer">
        <div className="footer__brand">
            <h2>Caderno D'Vinho</h2>
            <p>Descubra seu gosto. Construa seu repertório.</p>
        </div>

        <div className="footer__links">
            <div>
            <strong>Explorar</strong>
            <a href="#vinhos">Vinhos</a>
            <a href="#wine-finder">Wine Finder</a>
            <a href="#experiencias">Experiências</a>
            </div>

            <div>
            <strong>Aprender</strong>
            <a href="#aprender">Guias</a>
            <a href="#aprender">Uvas</a>
            <a href="#aprender">Harmonização</a>
            </div>

            <div>
            <strong>Marca</strong>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
            <a href="#">Instagram</a>
            </div>
        </div>

        <div className="footer__bottom">
            <span>© 2026 Caderno D'Vinho</span>
            <span>Vinho, descoberta e repertório.</span>
        </div>
    </footer>
    </>
  );
}