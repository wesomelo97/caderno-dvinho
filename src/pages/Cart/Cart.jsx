import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const {
    cart,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart cart--empty">
        <div>
          <span>Sua adega está vazia</span>
          <h1>Nenhuma garrafa por aqui ainda.</h1>

          <p>
            Explore os rótulos ou use o Wine Finder para descobrir algo que
            combine com você.
          </p>

          <Link to="/vinhos">Explorar vinhos</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart">
      <section className="cart__header">
        <Link to="/vinhos">← Continuar explorando</Link>

        <span>Sua seleção</span>
        <h1>Carrinho</h1>
      </section>

      <section className="cart__content">
        <div className="cart__items">
          {cart.map((item) => (
            <article key={item.id} className="cart-item">
              <div className="cart-item__image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-item__info">
                <span>{item.type}</span>

                <h2>{item.name}</h2>

                <p>{item.origin}</p>

                <button onClick={() => removeFromCart(item.id)}>
                  Remover
                </button>
              </div>

              <div className="cart-item__quantity">
                <button onClick={() => decreaseQuantity(item.id)}>
                  −
                </button>

                <strong>{item.quantity}</strong>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>

              <strong className="cart-item__price">
                {(item.price * item.quantity).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </article>
          ))}
        </div>

        <aside className="cart__summary">
          <span>Resumo</span>

          <div>
            <p>Subtotal</p>

            <strong>
              {cartTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>

          <p className="cart__shipping">
            Frete calculado no checkout.
          </p>

          <Link to="/checkout">Continuar para checkout</Link>
        </aside>
      </section>
    </main>
  );
}