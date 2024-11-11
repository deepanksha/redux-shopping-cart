import React from "react";
// import { Link } from "react-router-dom";
import cartIcon from "../assests/shopping_cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shoppi</Link>
        </h1>
        <img src={cartIcon} alt="" />
      </div>
    </header>
  );
};

export default Header;
