import React from "react";
// import { productList } from "./store/productsList";
import Product from "./components/Product";
import "./App.css";
import { useSelector } from "react-redux";
import Header from "./components/Header";

const App = () => {
  const productList = useSelector((state) => state.products);
  console.log(productList);
  return (
    <>
      <Header />
      <div className="products-container">
        {productList.map(({ id, title, rating, price, image }) => (
          <Product
            key={id}
            title={title}
            rating={rating.rate}
            price={price}
            imgageUrl={image}
          />
        ))}
      </div>
    </>
  );
};

export default App;
