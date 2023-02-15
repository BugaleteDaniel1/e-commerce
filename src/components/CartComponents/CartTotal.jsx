import { Link } from "react-router-dom";

export const CartTotal = () => {
  return (
    <section className="cart-total">
      <header className="total-header">
        <Link className="btn" to="/products">
          Continue Shopping
        </Link>
        <button className="btn">Clear Shopping Cart</button>
      </header>

      <div className="total-main">
        <div className="total-main-top">
          <div>Subtotal: $03030</div>
          <div>Shipping: $213</div>
        </div>
        <div className="total-main-bottom">
          <div>Total Price: $400</div>
        </div>
      </div>
    </section>
  );
};
