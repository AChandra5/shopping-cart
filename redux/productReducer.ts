import { typeCart } from "./constants";


export const productDataReducer = (data = [], action: any) => {
    switch (action.type) {
        case typeCart.PRODUCT_LIST:
            console.warn("Product lsit reducer is called", action)
            return [action.data]
        default: 
        return data
    }
}   