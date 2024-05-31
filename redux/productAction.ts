import { typeCart } from "./constants";

export const productAction = () => {
  return {
    type: typeCart.PRODUCT_LIST,
  };
};

export const addToCartAction = (item: any) => {
  return {
    type: typeCart.ADD_TO_CART_ACTION,
    payload: item,
  };
};

export const removeFromCartAction = (item: any) => {
  return {
    type: typeCart.REMOVE_FROM_CART_ACTION,
    payload: item,
  };
};
