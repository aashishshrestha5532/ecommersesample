import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "./StateProvider";
import { DeleteOutline as DeleteIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getCartTotal } from "./reducer";

function getModalStyle() {
  const right = 3;
  const top = 10;

  return {
    top: `${top}%`,
    right: `${right}%`,
    transform: `translate(-${top}%, -${right}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottom: "1px solid lightgray",
    padding: 3,
  },
  itemImage: {
    height: 60,
    objectFit: "contain",
  },
  itemInfo: {
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "column",
    height: "100%",
    marginLeft: 15,
    justifyContent: "space-between",
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemPrice: {
    marginTop: 20,
    fontSize: 13,
  },
  deleteBtnWrapper: {
    padding: 5,
    border: "1px solid lightgray",
    borderRadius: 4,
    cursor: "pointer",
  },
  deleteIcon: {
    fontSize: 16,
  },
  modalSubTotal: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 5px 10px 5px",
    borderBottom: "1px solid lightgray",
  },
  modalButtons: {
    display: "flex",
    alignItems: "center",
    marginTop: 15,
  },
  viewCartBtn: {
    backgroundColor: "#4baea0",
    border: "1px solid #4baea0",
    padding: "5px 12px",
    fontWeight: "bold",
    width: 250,
    display: "flex",
    alignItems: "center",
    color: "white",
    textDecoration:'none',
    borderRadius: 4,
    fontSize:14,
    justifyContent: "center",
  },
  checkoutBtn: {
    backgroundColor: "#d68215",
    border: "1px solid #d68215",
    padding: "5px 12px",
    fontWeight: "bold",
    fontSize:14,
    width: 250,
    display: "flex",
    textDecoration:'none',
    color: "white",
    borderRadius: 4,
    alignItems: "center",
    marginLeft: 10,
    justifyContent: "center",
  },
  continueShopping: {
    color: "#d68215",
    display: "flex",
    marginTop: 5,
    justifyContent: "center",
    textDecoration: "underline",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [{ cartModalVisible, cart }, dispatch] = useStateValue();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    dispatch({
      type: "HIDE_CART_MODAL",
    });
  };

  const removeItemFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const body = (
    <div
      style={modalStyle}
      className={classes.modal}
      onMouseLeave={handleClose}
    >
      <div className={classes.modalItemList}>
        {cart?.map((item) => (
          <div className={classes.modalItem}>
            <img src={item.image} alt="" className={classes.itemImage} />
            <div className={classes.itemInfo}>
              <label className={classes.itemTitle}>{item.name}</label>
              <label className={classes.itemPrice}>
                {item.qty} * {item.price}
              </label>
            </div>
            <div
              className={classes.deleteBtnWrapper}
              onClick={() => removeItemFromCart(item.id)}
            >
              <DeleteIcon className={classes.deleteIcon} />
            </div>
          </div>
        ))}
      </div>
      <span className={classes.modalSubTotal}>
        <label>SubTotal</label>
        <label>Rs.{getCartTotal(cart)}</label>
      </span>
      <div className={classes.modalButtons}>
          <Link className={classes.viewCartBtn} to="/viewcart">View Cart</Link>
          <Link className={classes.checkoutBtn} to="/checkout">Checkout</Link>
      </div>
      <Link className={classes.continueShopping} to="#">
        Continue Shopping
      </Link>
    </div>
  );

  return cartModalVisible && body;
}
