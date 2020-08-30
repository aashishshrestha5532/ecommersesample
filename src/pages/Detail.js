import React, { useState, useEffect, Fragment } from "react";
import "./Detail.scss";
import ProductList from "../ProductList";
import {
  ShoppingCart as CartIcon,
  Payment as BuyIcon,
  FavoriteBorder as WishlistIcon,
} from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import {
  getProductDetail,
  getProductsBySameSeller,
  getSimilarProducts,
} from "../api";
import RatingBar from "../RatingBar";

export default function Detail({ match }) {
  const [data, setData] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [sameSellerProducts, setSameSellerProducts] = useState([]);
  useEffect(() => {
    // extract the slug
    let slug = match.params.slug;
    setData(getProductDetail(slug));
    setSameSellerProducts(getProductsBySameSeller());
    setSimilarProducts(getSimilarProducts());
  }, [match]);

  const [, dispatch] = useStateValue();
  const [qty, setQty] = React.useState(1); //default qty

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: data?.id,
        name: data?.name,
        price: data?.price,
        qty: qty,
        image: data?.image,
      },
    });
    dispatch({
      type: "OPEN_CART_MODAL",
    });
  };

  const incrementQty = () => {
    setQty(qty + 1);
  };

  const decrementQty = () => {
    setQty(qty > 1 ? qty - 1 : qty);
  };

  const handleAddToWishlist = () => {};

  return (
    <div className="detail">
      <div className="detail__overview">
        <img className="detail__productImage" alt="" src={data?.image} />
        <div className="detail__info">
          <h4 className="detail__product__title">{data?.name}</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <RatingBar input={data?.rating} />
            (Customer Rating)
          </div>
          <h2 className="detail__product__price">Price : Rs. {data?.price}</h2>
          <label className="in-stock">In Stock</label>
          <div className="detail__qtyOperation">
            <label>Qty</label>
            <span className="remove-qty" onClick={decrementQty}>
              -
            </span>
            <label className="qty">{qty}</label>
            <span className="add-qty" onClick={incrementQty}>
              +
            </span>
          </div>
          <div className="detail__buttons">
            <button className="detail__cartBtn" onClick={handleAddToCart}>
              <CartIcon style={{ color: "#fff", marginRight: 3 }} />
              <label>Add To Cart</label>
            </button>
            <button className="detail__buyBtn">
              <BuyIcon style={{ color: "#fff", marginRight: 3 }} />
              <label>Buy now</label>
            </button>
          </div>
          <div className="detail__wishlistBtn" onClick={handleAddToWishlist}>
            <WishlistIcon style={{ color: "#d68215", marginRight: 5 }} />
            <label htmlFor="icon-wishlist">Wishlist</label>
          </div>
        </div>
        <div className="detail__extraInfo"></div>
        {/* info */}
        {/* extra_info */}
      </div>
      <div className="detail__tags">
        <label>Tags: </label>
        {data?.tags?.map((tag, index) => (
          <Fragment key={index}>
            <label className="detail__tag">{tag}</label>
          </Fragment>
        ))}
      </div>
      <div className="detail__specifications">
        <div className="detail__specificationOne">
          <div className="detail__specificationTitleWrapper">
            <label>Product details</label>
          </div>
          <div className="detail__specification__list">
            <ul>
              {data?.specifications?.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="detail__specificationTwo">
          <div className="detail__specificationTitleWrapper">
            <label>Product Rating & Review</label>
          </div>
          <div className="detail__specification__list p-2">
            {data?.ratings?.length === 0 && <p>No Rating yet.</p>}
          </div>
        </div>
      </div>

      <div className="detail__relatedProducts">
        <ProductList
          title="Related Product"
          data={similarProducts}
          styles={{ width: "100%" }}
        />
        <ProductList
          title="Product by same seller"
          data={sameSellerProducts}
          styles={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
