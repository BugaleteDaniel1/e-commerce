import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { ProductPage } from "./pages/ProductPage";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/products/">
          <Route index element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
