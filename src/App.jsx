import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Catalog from "./pages/Catalog/Catalog";
import Experiences from "./pages/Experiences/Experiences";
import Reservation from "./pages/Reservation/Reservation";
import About from "./pages/About/About";
import Learn from "./pages/Learn/Learn";
import Article from "./pages/Article/Article";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vinhos/:slug" element={<Product />} />
      <Route path="/vinhos" element={<Catalog />} />
      <Route path="/experiencias" element={<Experiences />} />
      <Route path="/reservar" element={<Reservation />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/aprender" element={<Learn />} />
      <Route path="/aprender/:slug" element={<Article />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}