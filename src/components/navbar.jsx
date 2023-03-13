import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ShoppingCart ,MagnifyingGlass} from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";
export const Navbar = () => {

  
  const {search,setSearch,val,setVal}=useContext(ShopContext)
  const handleChange=(event)=>{
      setVal(event.target.value);
      // setSearch(event.target.value)
      // console.log(val)

  }

  const handleClicks=()=>{
    // console.log(val)
    // if(val)
      setSearch(true);
      // else
      // setSearch(false);
      window.analytics.track("search", {term:val});
  }

  return (
    <div className="navbar">

      <input className="sbar" type='text' onChange={handleChange} value={val}/>
      <div className="sicon" onClick={handleClicks}>
        <MagnifyingGlass size={22}/>
      </div>
      <div className="links">
        <Link to="/shop"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
