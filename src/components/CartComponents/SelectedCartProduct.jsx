import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../contexts/cartContext";

export const SelectedCartProduct = () => {
  const { cartItems: products } = useCartContext();
  console.log(products);

  return (
    <section className="selected-products">
      {products.map((prd) => {
        return (
          <div key={prd.id} className="prods-container">
            <div className="prod-info">
              <img src={prd.image} alt="a image of the added in cart product" />
              <div className="info-abt-prd">
                <h4 className="cart-prd-title">{prd.name}</h4>
                <span className="cart-prd-price">${prd.price}</span>
              </div>
            </div>
            <div className="counter">
              <div className="counter-children">+</div>
              <div className="counter-children">1</div>
              <div className="counter-children">-</div>
            </div>
            <div className="remove">
              <FaTrash />
            </div>
          </div>
        );
      })}
    </section>
  );
};
