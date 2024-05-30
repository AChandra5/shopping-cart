import { typeCart } from "./constants";


export const productAction = () => {
   
   let data = "a for apple and b for ball"
        // console.warn("product Action is called", data);
        return {
            type: typeCart.PRODUCT_LIST,
            data
        }
} 