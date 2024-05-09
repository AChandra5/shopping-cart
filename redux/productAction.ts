import { typeCart } from "./constants";


export const productAction = () => {
    // let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     data = await data.json();
   let data = "a for apple and b for ball"
        console.warn("product Action is called", data);
        return {
            type: typeCart.PRODUCT_LIST,
            data
        }
} 