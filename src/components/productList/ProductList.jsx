import React from "react";
import "./productList.css";
import Product from "./product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="plist">
      <div className="plist-texts">
        <h1 className="plist-title">Create & Inspire.</h1>
        <div className="plist-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          cumque similique impedit, veniam eveniet necessitatibus repellendus?
          Omnis quibusdam adipisci.
        </div>
      </div>
      <div className="plist-product">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
