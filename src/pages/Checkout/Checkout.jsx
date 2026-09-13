import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import "./Checkout.css";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();

  const [completed, setCompleted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setCompleted(true);
    clearCart();
  }

  if (completed) {
    return (
      <main className="checkout checkout--success">
        <div className="checkout__success">
          <span>Pedido confirmado</span>

          <h1>Boa escolha.</h1>

          <p>
            Seu pedido fictício foi registrado com sucesso.
          </p>

          <Link to="/">Voltar para a home</Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="checkout checkout--empty">
        <div>
          <h1>Seu carrinho está vazio.</h1>
          <Link to="/vinhos">Explorar vinhos</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout">
      <section className="checkout__intro">
        <Link to="/carrinho">← Voltar para o carrinho</Link>

        <span>Finalizar pedido</span>

        <h1>Quase lá.</h1>

        <p>
          Preencha seus dados para concluir esta compra simulada.
        </p>
      </section>

      <form className="checkout__form" onSubmit={handleSubmit}>
        <div className="checkout__group">
          <label>Nome</label>
          <input type="text" required />
        </div>

        <div className="checkout__group">
          <label>E-mail</label>
          <input type="email" required />
        </div>

        <div className="checkout__group">
          <label>CEP</label>
          <input type="text" required />
        </div>

        <div className="checkout__group">
          <label>Endereço</label>
          <input type="text" required />
        </div>

        <div className="checkout__summary">
          <span>Total do pedido</span>

          <strong>
            {cartTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </div>

        <button type="submit">
          Confirmar pedido
        </button>
      </form>
    </main>
  );
}