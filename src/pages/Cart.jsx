import { useCartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";
import { SelectedCartProduct } from "../components/CartComponents/SelectedCartProduct";
import { CartTotal } from "../components/CartComponents/CartTotal";
import CartCSS from "../styles/cart-styles/cart.module.css";
import { FaBoxOpen } from "react-icons/fa";

export const Cart = () => {
  const { state } = useCartContext();
  const { cartContent } = state;

  return (
    <>
      <Link className="rounded-right" to="/products">
        <FaBoxOpen />
      </Link>
      {cartContent.length === 0 ? (
        <div style={{ display: "grid", placeItems: "center" }}>
          <h1 style={{ textAlign: "center" }}>Cart is Empty</h1>
          <Link
            style={{
              textAlign: "center",
              width: "100px",
            }}
            to="/products"
          >
            Fill IT
          </Link>
        </div>
      ) : (
        <section className={CartCSS.container}>
          <SelectedCartProduct />
          <CartTotal />
        </section>
      )}
    </>
  );
};
