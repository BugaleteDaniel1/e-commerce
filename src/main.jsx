import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HomeContext } from "./contexts/homeContext";
import { ProductContext } from "./contexts/productsContext";
import { CartContext } from "./contexts/cartContext";
import { Cart } from "./pages/Cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContext>
        <ProductContext>
          <HomeContext>
            <App />
          </HomeContext>
        </ProductContext>
      </CartContext>
    </BrowserRouter>
  </React.StrictMode>
);
