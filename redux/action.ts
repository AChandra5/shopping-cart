import { typeCart } from "./constants";

const AddToCart = () => {
    console.log("Add to cart action triggered");
    return({
        type: typeCart.ADD_TO_CART,
        
    }
    )
}

export default AddToCart