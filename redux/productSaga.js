import { takeEvery,put } from "redux-saga/effects"
import { typeCart } from "./constants"

function* getProducts() {
     let data = yield fetch('http://localhost:3000/products');
        data = yield data.json();
    console.warn("Get products_saga", data) 
    yield put({type: typeCart.SET_PRODUCT_LIST, data})
}

function* addProductToCart(action) {
    console.log("actionPayload", action)
    yield put({type: typeCart.ADD_TO_CART, payload: action.payload} )
}

function* removeFromCartAction(action) {
    yield put ({type: typeCart.REMOVE_FROM_CART, removePayload: action.payload})
}

function* productSaga() {
    yield takeEvery(typeCart.PRODUCT_LIST, getProducts);
    yield takeEvery(typeCart.ADD_TO_CART_ACTION, addProductToCart);
    yield takeEvery(typeCart.REMOVE_FROM_CART_ACTION, removeFromCartAction);

}

export default productSaga