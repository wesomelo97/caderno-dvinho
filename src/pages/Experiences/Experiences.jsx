import { Link } from "react-router-dom";
import "./Experiences.css";

const experiences = [
  {
    id: 1,
    title: "Degustação guiada",
    description:
      "Uma experiência para provar diferentes estilos e entender, na prática, como uva, região e método mudam o vinho.",
    duration: "1h30",
    price: "R$ 89",
  },
  {
    id: 2,
    title: "Noite de harmonização",
    description:
      "Uma noite dedicada a explorar a relação entre vinho e comida, com combinações pensadas para aprender degustando.",
    duration: "2h",
    price: "R$ 149",
  },
  {
    id: 3,
    title: "Descobertas da casa",
    description:
      "Encontros temáticos com rótulos selecionados pela curadoria da Caderno D'Vinho, focados em regiões, estilos ou uvas.",
    duration: "1h30",
    price: "R$ 99",
  },
];

export default function Experiences() {
  return (
    <main className="experiences-page">
      <section className="experiences-page__hero">
        <Link to="/" className="experiences-page__back">
          ← Voltar para a home
        </Link>

        <span>Além da garrafa</span>

        <h1>Experiências para aprender bebendo.</h1>

        <p>
          Descubra novos estilos, construa repertório e compartilhe boas taças
          sem transformar vinho em um assunto complicado.
        </p>
      </section>

      <section className="experiences-page__content">
        <div className="experiences-page__intro">
          <span>Próximas experiências</span>
          <h2>Escolha como você quer descobrir.</h2>
        </div>

        <div className="experiences-page__grid">
          {experiences.map((experience) => (
            <article key={experience.id} className="experience-page-card">
              <div>
                <span className="experience-page-card__number">
                  0{experience.id}
                </span>

                <h3>{experience.title}</h3>

                <p>{experience.description}</p>
              </div>

              <div className="experience-page-card__footer">
                <div>
                  <span>Duração</span>
                  <strong>{experience.duration}</strong>
                </div>

                <div>
                  <span>A partir de</span>
                  <strong>{experience.price}</strong>
                </div>

                <button>Ver datas</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experiences-page__how">
        <div>
          <span>Como funciona</span>
          <h2>Sem cerimônia. Com contexto.</h2>
        </div>

        <div className="experiences-page__steps">
          <div>
            <strong>01</strong>
            <p>Escolha uma experiência.</p>
          </div>

          <div>
            <strong>02</strong>
            <p>Reserve sua data.</p>
          </div>

          <div>
            <strong>03</strong>
            <p>Prove, compare e descubra.</p>
          </div>
        </div>
      </section>

      <section className="experiences-page__cta">
        <span>Primeira vez?</span>
        <h2>Comece pela degustação guiada.</h2>

        <p>
          É a melhor porta de entrada para quem quer entender melhor o próprio
          gosto sem precisar saber nada antes.
        </p>

        <button>Ver próximas datas</button>
      </section>
    </main>
  );
}