import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Navbar } from "../../components/navbar";


export const Shop = () => {
  return (
    <>
    <Navbar/>
    <div className="shop">
      <div className="shopTitle">
        <h1>IntelliJ Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </>
  );
};
