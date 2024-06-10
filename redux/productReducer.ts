import { typeCart } from "./constants";
import {InitialState, Product, ProductAction} from './types'
import { createTransform } from 'redux-persist';

console.log("createTransform", createTransform)

const initialState: InitialState = {
  products: [],
  cart:  [],
  removeItems: {
    id: "",
    name: "",
    color: "",
    price: "",
    category: "",
    brand: "",
    photo: "",
  },
};

export const productDataReducer = (state = initialState, action: ProductAction) => {
  console.log("Action", action);
  console.log("State", state?.cart);

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
      const removeItem: Product = action.payload;
      const indexToBeRemoved: any = state?.cart?.indexOf(removeItem);
      const currentcart = [...state?.cart];
      if (indexToBeRemoved !== -1) {
        currentcart.splice(indexToBeRemoved, 1);
      }
      // debugger
      return {
        ...state,
        cart: currentcart,
        removeItems: removeItem,
      };
    default:
      return state;
  }
};
