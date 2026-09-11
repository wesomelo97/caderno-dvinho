import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vinhos/:slug" element={<Product />} />
    </Routes>
  );
}