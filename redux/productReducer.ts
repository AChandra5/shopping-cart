import { typeCart } from "./constants";


export const productDataReducer = (data = [], action: any) => {
    switch (action.type) {
        case typeCart.SET_PRODUCT_LIST: 
        console.log(action, "action")
        return [...action.data]
        default: 
        return "no default here"
    }
}   