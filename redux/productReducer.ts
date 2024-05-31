import { typeCart } from "./constants";

const initialState = {
  products: [],
  cart: [],
  removeItems: [],
};

export const productDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case typeCart.SET_PRODUCT_LIST:
      return {
        ...state,
        products: action.data || state.products,
      };

    case typeCart.ADD_TO_CART:
      let cart = [];
      cart.push(action?.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case typeCart.REMOVE_FROM_CART:

      const removeItem = action.removePayload;
      const indexToBeRemoved = state?.cart?.indexOf(removeItem);
      const currentcart = [...state?.cart];
      if(indexToBeRemoved !== -1) {
        currentcart.splice(indexToBeRemoved, 1);
      }
      return {
        ...state,
        cart: currentcart,
        removeItems: removeItem
      };
    default:
      return state;
  }
};
