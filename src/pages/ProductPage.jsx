import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/productsContext";
export const ProductPage = () => {
  const [pageInfo, setPageInfo] = useState([]);
  const [isTextFull, setIsTextFull] = useState(false);

  const { id } = useParams();
  const { state } = useProductsContext();
  const { processedData } = state;

  useEffect(() => {
    const currentPage = processedData.filter((el) => el.id === id);
    setPageInfo(currentPage[0]);
  }, [pageInfo]);

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
  }, [isTextFull]);

  const enlargeText = () => {
    setIsTextFull(!isTextFull);
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
          <button onClick={enlargeText} className="show-more-btn">
            Show More...
          </button>

          <p className="product-page-product-info">Available: In Stock</p>
          <p className="product-page-product-info">SKU: {pageInfo.id}</p>
          <p className="product-page-product-info">Brand: {pageInfo.company}</p>
        </div>
      </div>
      <Link className="btn" to="/cart">
        Add to Cart
      </Link>
    </section>
  );
};
