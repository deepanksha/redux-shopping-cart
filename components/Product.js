import React from "react";

const Product = ({ title, rating, price, imgageUrl }) => {
  return (
    <>
      <div className="product">
        <div className="product-image">
          <img src={imgageUrl} alt={title} />
        </div>
        <div className="title-container">
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>
        <div className="price-rating-container">
          <p className="rating">{+rating} ⭐⭐⭐⭐</p>
          <p className="price">${price}</p>
        </div>
        <div className="cta-container">
          <button>Add to cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Product;
