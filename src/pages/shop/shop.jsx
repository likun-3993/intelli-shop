import React,{useContext} from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Navbar } from "../../components/navbar";
import { ShopContext } from "../../context/shop-context";
import { CloudFog } from "phosphor-react";

export const Shop = () => {
  const {search,val}=useContext(ShopContext)
  // console.log(search)
  const newPro=PRODUCTS.filter(x=>{
    return x.productName.toLowerCase().includes(val.toLowerCase())
  })

  console.log(newPro);

  return (
    <>
    <Navbar/>
    <div className="shop">
      <div className="shopTitle">
        <h1>IntelliJ Shop</h1>
      </div>
      <div className="products">
        {!search && PRODUCTS.map((product) => (<Product data={product} />
        ))}
        {search && newPro.map(x=>(<Product data={x} />))}

      </div>
    </div>
    </>
  );
};
