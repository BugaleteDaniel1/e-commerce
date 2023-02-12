import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/productsContext";
import { useCartContext } from "../contexts/cartContext";

export const ProductPage = () => {
  const [pageInfo, setPageInfo] = useState(
    JSON.parse(localStorage.getItem("pageData")) || []
  );

  const [isTextFull, setIsTextFull] = useState(false);

  const { id } = useParams();
  const { state } = useProductsContext();
  const { processedData } = state;
  useEffect(() => {
    const currentPage = processedData.filter((el) => el.id === id);
    setPageInfo(currentPage[0]);
    localStorage.setItem("pageData", JSON.stringify(currentPage[0]));

    return () => {
      localStorage.clear();
    };
  }, []);

  // const cartContext = useCartContext();
  const { setCartContent } = useCartContext();

  const descriptionRef = useRef(null);

  useEffect(() => {
    descriptionRef.current.textContent = pageInfo.description;

    if (!isTextFull) {
      const text = descriptionRef.current.textContent;
      const firstBulk = 19;
      const remainingEl = text.length - 1 - firstBulk;
      const fullText = descriptionRef.current.textContent.split(" ");
      fullText.splice(firstBulk, remainingEl);
      const textShort = fullText.join(" ");
      descriptionRef.current.textContent = textShort;
    }
  });

  const enlargeText = () => {
    setIsTextFull(!isTextFull);
  };

  const addToCart = (storage) => {
    setCartContent(storage);
  };

  return (
    <section className="product-page">
      <Link to="/products">BACK TO PRODUCTS</Link>
      <div className="prodcts">
        <header>
          <img
            className="product-page-img"
            src={pageInfo.image}
            alt="a page of an product"
          />
        </header>
        <div className="product-page-main">
          <h2 className="product-page-title">{pageInfo.name}</h2>
          <div className="rating">5stars</div>
          <div className="product-page-price">${pageInfo.price}</div>
          <p ref={descriptionRef} className="product-page-description">
            {pageInfo.description}
          </p>
          <span role={"button"} onClick={enlargeText} className="show-more-btn">
            {!isTextFull ? "...more" : "less"}
          </span>
          <p className="product-page-product-info">Available: In Stock</p>
          <p className="product-page-product-info">SKU: {pageInfo.id}</p>
          <p className="product-page-product-info">Brand: {pageInfo.company}</p>
        </div>
      </div>
      <Link
        onClick={() => addToCart(JSON.parse(localStorage.getItem("pageData")))}
        className="btn"
        to="/cart"
      >
        Add to Cart
      </Link>
    </section>
  );
};
