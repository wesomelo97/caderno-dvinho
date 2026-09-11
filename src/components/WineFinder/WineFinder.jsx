import { useState } from "react";
import "./WineFinder.css";
import { wines } from "../../data/wines";

const questions = [
  {
    key: "intensity",
    title: "Você prefere vinhos mais leves ou mais intensos?",
    options: ["Leve", "Equilibrado", "Intenso"],
  },
  {
    key: "profile",
    title: "Que tipo de sabor te chama mais atenção?",
    options: ["Frutado", "Seco", "Fresco"],
  },
  {
    key: "occasion",
    title: "Qual é a ocasião?",
    options: ["Jantar", "Relaxar", "Experimentar algo novo", "Presente"],
  },
];



export default function WineFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const currentQuestion = questions[step];

  function handleAnswer(option) {
    const updatedAnswers = {
      ...answers,
      [currentQuestion.key]: option,
    };

    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      generateRecommendation(updatedAnswers);
    }
  }

  function generateRecommendation(finalAnswers) {
  const scoredWines = wines.map((wine) => {
    let score = 0;

    if (wine.profile.includes(finalAnswers.intensity)) {
      score += 2;
    }

    if (wine.profile.includes(finalAnswers.profile)) {
      score += 2;
    }

    if (wine.occasions.includes(finalAnswers.occasion)) {
      score += 1;
    }

    return {
      ...wine,
      score,
    };
  });

  const bestMatch = scoredWines.sort((a, b) => b.score - a.score)[0];

  setResult(bestMatch);
}

  function restartFinder() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  return (
    <section className="wine-finder">
      <div className="wine-finder__intro">
        <span>Wine Finder</span>
        <h2>Descubra um vinho que combine com você.</h2>
        <p>
          Responda algumas perguntas simples. Nada de teste de sommelier.
        </p>
      </div>

      <div className="wine-finder__box">
        {!result ? (
          <>
            <div className="wine-finder__progress">
              Pergunta {step + 1} de {questions.length}
            </div>

            <h3>{currentQuestion.title}</h3>

            <div className="wine-finder__options">
              {currentQuestion.options.map((option) => (
                <button key={option} onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="wine-finder__result">
          <span>Sua recomendação</span>

          <div className="wine-finder__result-content">
            <img src={result.image} alt={result.name} />

            <div>
              <h3>{result.name}</h3>

              <p>{result.description}</p>

              <strong>
                {result.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>

              <div className="wine-finder__result-actions">
                <button>Ver vinho</button>
                <button onClick={restartFinder}>Refazer descoberta</button>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}