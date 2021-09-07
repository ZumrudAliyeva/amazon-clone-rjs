import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export const Header = () => {
  const [{basket}] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt=""
        />
        </Link>
      <div className="header__option">
          <span className="header__optionLineOne">Deliver to</span>
          <span className="header__optionLineTwo"><i className="fas fa-map-marker-alt"></i>Azerbaijan</span>
        </div>
      <div className="header__search">
        <span>All <i className="fas fa-sort-down"></i></span>
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__option">
          <span className="header__optionLineTwo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cL3I-Lg0JPr84eG2Ipms_tEAhB4sHbAMXQ&usqp=CAU" alt="" />
          <i className="fas fa-sort-down"></i></span>
        </div>
      <div className="header__nav">
        <Link to="/login">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
      <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
      </div>
      </Link>
    </div>
  );
};
