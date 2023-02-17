import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";
import BottomCartCSS from "../../styles/cart-styles/cart-total.module.css";
import { formatCurrency } from "../../hooks/formatNumber";
export const CartTotal = () => {
  const { state, dispatch } = useCartContext();
  const { cartTotalPrice } = state;
  const shippingCost = 5.99;

  const removeAllItems = () => {
    dispatch({ type: "REMOVE_ALL_ITEMS" });
  };

  return (
    <section className={BottomCartCSS.cartTotal}>
      <header className={BottomCartCSS.totalHeader}>
        <Link className={BottomCartCSS.btn} to="/products">
          Continue Shopping
        </Link>
        <button onClick={removeAllItems}>Clear Shopping Cart</button>
      </header>

      <div className={BottomCartCSS.totalMain}>
        <div className={BottomCartCSS.totalTop}>
          <div>Subtotal: {formatCurrency(cartTotalPrice)}</div>
          <div>Shipping: {formatCurrency(shippingCost)}</div>
        </div>
        <div className={BottomCartCSS.totalBottom}>
          <div>
            Total Price: {formatCurrency(cartTotalPrice + shippingCost)}
          </div>
        </div>
      </div>
    </section>
  );
};
