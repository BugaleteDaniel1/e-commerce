import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../contexts/cartContext";
import { formatCurrency } from "../../hooks/formatNumber";
import CartTopCSS from "../../styles/cart-styles/selected-products.module.css";

export const SelectedCartProduct = () => {
  const { state, dispatch } = useCartContext();
  const { cartContent: products } = state;

  return (
    <section className={CartTopCSS.selectedProducts}>
      {products.map((prd) => {
        return (
          <div key={prd.id} className={CartTopCSS.prodsContainer}>
            <div className={CartTopCSS.prodInfo}>
              <img src={prd.image} alt="a image of the added in cart product" />
              <div>
                <h4 className={CartTopCSS.heading}>{prd.name}</h4>
                <span>{formatCurrency(prd.price)}</span>
              </div>
            </div>
            {/* <div className={CartTopCSS.counter}>
              <div className={CartTopCSS.counterChildren}>+</div>
              <div className={CartTopCSS.counterChildren}>1</div>
              <div className={CartTopCSS.counterChildren}>-</div>
            </div> */}
            <div
              onClick={() =>
                dispatch({ type: "REMOVE_THIS_ITEM", payload: prd.id })
              }
              className={CartTopCSS.remove}
            >
              <FaTrash />
            </div>
          </div>
        );
      })}
    </section>
  );
};
