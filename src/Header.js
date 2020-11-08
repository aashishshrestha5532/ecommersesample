import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import WishlistIcon from "@material-ui/icons/FavoriteBorder";
import CartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();
  const openCartModal = () => {
    // showing the cart modal only when the cart item exists
    if (cart.length) {
      dispatch({
        type: "OPEN_CART_MODAL",
      });
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={"https://www.gyapu.com/7384b02225d68a49b2c14c6b4008e49e.svg"}
          alt={""}
        />
      </Link>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="I'm searching for..."
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__links">
        <Link className="header__link" to="#">
          <div className="header__wishlist">
            <WishlistIcon className="header__wishlistIcon" />
            <label style={{ fontSize: 14 }}>Wishlist</label>
          </div>
        </Link>
        <Link className="header__link" onMouseEnter={openCartModal}>
          <div className="header__cart">
            <CartIcon className="header__cartIcon" />
            <label style={{ fontSize: 14 }}>Cart</label>
            <span className="header__cartBadge">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
