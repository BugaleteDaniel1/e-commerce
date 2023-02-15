import { useCartContext } from "../contexts/cartContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SelectedCartProduct } from "../components/CartComponents/SelectedCartProduct";
import { CartTotal } from "../components/CartComponents/CartTotal";

export const Cart = () => {
  const { isCartEmpty, cartItems } = useCartContext();

  console.log(cartItems);

  return (
    <>
      {isCartEmpty ? (
        <h1>Cart is Empty, consider to fill it</h1>
      ) : (
        <section className="cart">
          <Link to="/products">Continue Shopping</Link>
          <SelectedCartProduct />
          <CartTotal />
        </section>
      )}
    </>
  );
};
