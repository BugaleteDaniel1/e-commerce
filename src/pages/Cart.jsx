import { useCartContext } from "../contexts/cartContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const {
    isCartEmpty,
    setCartContent,
    cartContent,
    setIsCartEmpty,
    cartItems,
  } = useCartContext();

  // console.log(cartItems);

  return (
    <>
      {isCartEmpty ? (
        <h1>Cart is Empty, consider to fill it</h1>
      ) : (
        <>
          <Link to="/products">BACK TO PRODUCTS</Link>
          <div className="cart-content">
            <div>cont</div>
            <div>another</div>
          </div>
        </>
      )}
    </>
  );
};
