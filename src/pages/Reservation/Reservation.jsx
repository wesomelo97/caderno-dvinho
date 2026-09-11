import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Reservation.css";

const experiences = {
  degustacao: {
    title: "Degustação guiada",
    price: 89,
  },
  harmonizacao: {
    title: "Noite de harmonização",
    price: 149,
  },
  descobertas: {
    title: "Descobertas da casa",
    price: 99,
  },
};

const availableDates = [
  "18 de setembro",
  "25 de setembro",
  "02 de outubro",
];

export default function Reservation() {
  const [searchParams] = useSearchParams();

  const initialExperience =
    searchParams.get("experiencia") || "degustacao";

  const [experience, setExperience] = useState(initialExperience);
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(2);
  const [confirmed, setConfirmed] = useState(false);

  const selectedExperience = experiences[experience];

  const total = selectedExperience.price * people;

  function handleSubmit(event) {
    event.preventDefault();
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <main className="reservation reservation--confirmed">
        <div className="reservation__confirmation">
          <span>Reserva registrada</span>

          <h1>Nos vemos à mesa.</h1>

          <p>
            Sua reserva fictícia para <strong>{selectedExperience.title}</strong>{" "}
            foi registrada para {date}, com {people} pessoas.
          </p>

          <Link to="/experiencias">← Voltar às experiências</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="reservation">
      <section className="reservation__intro">
        <Link to="/experiencias">← Voltar</Link>

        <span>Experiências Caderno D'Vinho</span>

        <h1>Reserve seu lugar.</h1>

        <p>
          Escolha a experiência, a data e quantas pessoas vão participar.
        </p>
      </section>

      <form className="reservation__form" onSubmit={handleSubmit}>
        <div className="reservation__field">
          <label>Experiência</label>

          <select
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
          >
            <option value="degustacao">Degustação guiada</option>
            <option value="harmonizacao">Noite de harmonização</option>
            <option value="descobertas">Descobertas da casa</option>
          </select>
        </div>

        <div className="reservation__field">
          <label>Data</label>

          <div className="reservation__dates">
            {availableDates.map((item) => (
              <button
                type="button"
                key={item}
                className={date === item ? "active" : ""}
                onClick={() => setDate(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="reservation__field">
          <label>Quantidade de pessoas</label>

          <div className="reservation__people">
            <button
              type="button"
              onClick={() => setPeople(Math.max(1, people - 1))}
            >
              −
            </button>

            <strong>{people}</strong>

            <button
              type="button"
              onClick={() => setPeople(Math.min(8, people + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="reservation__summary">
          <div>
            <span>Experiência</span>
            <strong>{selectedExperience.title}</strong>
          </div>

          <div>
            <span>Valor por pessoa</span>
            <strong>
              {selectedExperience.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>

          <div>
            <span>Total</span>
            <strong>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>
        </div>

        <button
          className="reservation__submit"
          disabled={!date}
          type="submit"
        >
          Confirmar interesse
        </button>
      </form>
    </main>
  );
}