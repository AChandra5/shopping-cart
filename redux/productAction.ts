import { typeCart } from "./constants";


export const productAction = () => {
        return {
            type: typeCart.PRODUCT_LIST,
        }
} 

export const addToCartAction = (item: any) => {
    console.log("add  to cart action triggered from action", item)
    return {
        type: typeCart.ADD_TO_CART_ACTION,
        payload: item
    }
}

export const removeFromCartAction = (item: any) => {
    console.log("remove from cart action triggered from action")
    return {
        type: typeCart.REMOVE_FROM_CART_ACTION,
        payload: item
    }
}