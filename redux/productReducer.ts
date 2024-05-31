import { typeCart } from "./constants";

const initialState = {
  products: [],
  cart: [],
  removeItems: [],
};

export const productDataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case typeCart.SET_PRODUCT_LIST:
      console.log(
        { ...state, products: action.data || state.products },
        "action"
      );
      return {
        ...state,
        products: action.data || state.products,
      };

    case typeCart.ADD_TO_CART:
      let cart = [];
      cart.push(action?.payload);
      console.log("Cart", cart);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case typeCart.REMOVE_FROM_CART:
        console.log("removeaction",action )
        let removeItem = action?.removePayload
        console.log("removeItem", removeItem)
        const newCart = state.cart.filter((item: any)=> item.id !== removeItem.id)
        console.log("cart after removed", {...state, cart: [...newCart]})
        return {
            ...state, cart: [...newCart]
        }
    default:
      return state;
  }
};
