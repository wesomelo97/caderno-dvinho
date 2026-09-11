import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Catalog from "./pages/Catalog/Catalog";
import Experiences from "./pages/Experiences/Experiences";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vinhos/:slug" element={<Product />} />
      <Route path="/vinhos" element={<Catalog />} />
      <Route path="/experiencias" element={<Experiences />} />
    </Routes>
  );
}