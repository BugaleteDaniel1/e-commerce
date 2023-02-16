import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";

export const CartTotal = () => {
  const { state, dispatch } = useCartContext();
  const { cartTotalPrice } = state;
  const shippingCost = 5.99;

  const removeAllItems = () => {
    dispatch({ type: "REMOVE_ALL_ITEMS" });
  };

  return (
    <section className="cart-total">
      <header className="total-header">
        <Link className="link-btn" to="/products">
          Continue Shopping
        </Link>
        <button onClick={removeAllItems} className="btn">
          Clear Shopping Cart
        </button>
      </header>

      <div className="total-main">
        <div className="total-main-top">
          <div>Subtotal: ${cartTotalPrice}</div>
          <div>Shipping: ${shippingCost}</div>
        </div>
        <div className="total-main-bottom">
          <div>Total Price: ${cartTotalPrice + shippingCost}</div>
        </div>
      </div>
    </section>
  );
};
