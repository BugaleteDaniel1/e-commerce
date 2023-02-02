import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";

const apiUrl = "https://course-api.com/react-store-products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
