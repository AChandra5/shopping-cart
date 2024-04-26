import { typeCart } from "./constants";

export const dummyReducer = (initialState=[], action: any) => {
    console.log("action", action)
    switch (action.type) {
        case typeCart.ADD_TO_CART :
            console.log("dummy reducer", action);
            // You should return the new state here, something like
            // return [...state, action.payload];
            return initialState; // this is just a placeholder, adjust it according to your needs
        default:
            console.log("not that type", action);
            return initialState; // return the initial state if the action is not handled
    }
}
