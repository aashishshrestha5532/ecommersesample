import React from "react";
import "./Cart.scss";
import {
  FavoriteBorder as WishlistIcon,
  DeleteOutline as RemoveIcon,
} from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";

const Cart = () => {

  const [{cart},dispatch]  = useStateValue()  
  const incrementQty = (id,qty) => {
      let newQty = qty + 1
      dispatch({
          type: "UPDATE_CART_QTY",
          itemId: id,
          qty : newQty
      })
  };

  const decrementQty = (id,qty) => {
    let newQty = qty - 1
    dispatch({
        type: "UPDATE_CART_QTY",
        itemId: id,
        qty : newQty
    })
  };

  const removeFromCart = (id) => {
      dispatch({
          type:"REMOVE_FROM_CART",
          payload: id
      })
  }

  return (
    <div className="cart">
      <div className="cart__productList">
        <h2 className="cart__title">My Carts</h2>
        {cart?.length === 0 && <h3>No Cart Items</h3>}
        {cart.map((item,index) => (
           <div className="cart__product" key={index}>
           <div className="cart__productImageWrapper">
             <img
               src={item.image}
               alt=""
             />
           </div>
           <div className="cart__productInfo">
             <label className="cart__productName">
               {item.name}
             </label>
             <div className="cart__qtyOperation">
               <label>Qty</label>
               <span className="remove-qty" onClick={() => decrementQty(item.id,item.qty)}>
                 -
               </span>
               <label className="qty">{item.qty}</label>
               <span className="add-qty" onClick={() => incrementQty(item.id,item.qty)}>
                 +
               </span>
             </div>
             <label htmlFor="cartPrice" className="cart__productPrice">
               Price : Rs.{item.price}
             </label>
           </div>
           <div className="cart__operationBtns">
             <WishlistIcon />
             <RemoveIcon onClick={() => removeFromCart(item.id)}/>
           </div>
           <label className="cart__productSubTotal">
             Subtotal : <label className="primary-color">Rs.{item.qty * item.price}</label>
           </label>
         </div>
        ))}
        
         </div>
      <div className="cart__orderSummary">
        <h3>Order Summary</h3>  
        <p>
          <label>Selected {(cart.length)} items price</label>
          <label>
            {" "}
        <b>Rs.{getCartTotal(cart)}</b>
          </label>
        </p>
        <p>
          <label>Delivery</label>
          <label>
            <b>Rs.0</b>
          </label>
        </p>
        <div className="cart__orderSummary__voucher">
            <input placeholder="Enter Voucher Code(If you have any)" />
            <button>Apply</button>
        </div>
        <p className="bm-1">
          <label>Discount</label>
          <label>
            <b>Rs.0</b>
          </label>
        </p>
        <p className="cart-total-section">
          <label>
            <b>Total Payable</b>
          </label>
          <label>
            <b>Rs.{getCartTotal(cart)}</b>
          </label>
        </p>

        <button className="cart__checkoutBtn">Proceed to Checkout</button>
      </div>
      {/* <button className="cart__continueShopping">Continue Shopping</button> */}
    </div>
  );
};

export default Cart;
