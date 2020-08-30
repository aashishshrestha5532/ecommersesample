export const initialState = {
  cart: [],
  user: {},
  cartModalVisible: false,
  gridMode: true,
};

export const getCartTotal = (cart) => {
  return cart.reduce((amount, item) => item.price * item.qty + amount, 0);
};

export default function reducer(state = initialState, action) {
  let existedItemIndex;
  switch (action.type) {
    case "ADD_TO_CART":
      // check whether the item is already in cart
      // if exists just update the qty
      existedItemIndex = state.cart.findIndex(
        (i) => i.id === action.payload.id
      );
      if (existedItemIndex !== -1) {
        // if the item existed
        let newCart = state.cart;
        newCart[existedItemIndex].qty += action.payload.qty;
        return { ...state, cart: newCart };
      } else return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_CART_QTY":
      existedItemIndex = state.cart.findIndex((i) => i.id === action.itemId);
      if (existedItemIndex !== -1) {
        // if the item existed
        // update may be either increment or decrement process based on operation

        // removed the following code as the React internally call the reducer functions
        // twice in the development phase which misleads to qty increment/decrement
        // so adopting a new logic to encounter the problem 
        // in production you can use the following code 

        // if (action.operation === 1) {
        //   state.cart[existedItemIndex].qty += 1;
        // } else {
        //   if (state.cart[existedItemIndex].qty > 1) {
        //     // qty should be atleast greater than 1
        //     state.cart[existedItemIndex].qty -= 1;
        //   }
        // }

        state.cart[existedItemIndex].qty = action.qty;
        return {
          ...state,
          cart: state.cart,
        };
      } else return state;

    case "OPEN_CART_MODAL":
      return { ...state, cartModalVisible: true };

    case "HIDE_CART_MODAL":
      return { ...state, cartModalVisible: false };

    case "SET_GRID_MODE":
      return { ...state, gridMode: true };

    case "SET_LIST_MODE":
      return { ...state, gridMode: false };

    default:
      return state;
  }
}
