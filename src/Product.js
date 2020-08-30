import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import RatingBar from "./RatingBar";

const Product = ({ image, price, slug, name, rating }) => {
  return (
    <Link className="product" to={`/detail/${slug}`}>
      <img src={image} alt="" className="product__image" />
      <div className="product__rating">
        {!!rating && <RatingBar input={rating} />}
      </div>
      <label htmlFor="product_name" className="product__title">
        {name}
      </label>
      <label className="product__price">Rs.{price}</label>
    </Link>
  );
};

export default Product;
