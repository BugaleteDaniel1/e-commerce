import { useCartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";
import { SelectedCartProduct } from "../components/CartComponents/SelectedCartProduct";
import { CartTotal } from "../components/CartComponents/CartTotal";

export const Cart = () => {
  const { state } = useCartContext();
  const { cartContent } = state;

  return (
    <>
      <Link className="rounded-right" to="/products">
        GO TO PRODUCTS
      </Link>
      {cartContent.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>Cart is Empty</h1>
      ) : (
        <section className="cart">
          <SelectedCartProduct />
          <CartTotal />
        </section>
      )}
    </>
  );
};
