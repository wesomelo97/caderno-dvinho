import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <h2>Caderno D'Vinho</h2>
        <p>Descubra seu gosto. Construa seu repertório.</p>
      </div>

      <div className="footer__links">
        <div>
          <strong>Explorar</strong>
          <Link to="/vinhos">Vinhos</Link>
          <Link to="/experiencias">Experiências</Link>
          <Link to="/aprender">Aprender</Link>
        </div>

        <div>
          <strong>Descobrir</strong>
          <Link to="/#wine-finder">Wine Finder</Link>
          <Link to="/sobre">Sobre a marca</Link>
          <Link to="/reservar">Reservas</Link>
        </div>

        <div>
          <strong>Marca</strong>
          <Link to="/sobre">Sobre</Link>
          <a href="#">Contato</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Caderno D'Vinho</span>
        <span>Vinho, descoberta e repertório.</span>
      </div>
    </footer>
  );
}