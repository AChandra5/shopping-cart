import { combineReducers } from "redux";
import { productDataReducer } from "./productReducer";

const rootReducer = combineReducers({
    productDataReducer
})


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;