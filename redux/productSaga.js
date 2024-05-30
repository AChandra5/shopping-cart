import { takeEvery,put } from "redux-saga/effects"
import { typeCart } from "./constants"

function* getProducts() {
     let data = yield fetch('http://localhost:3000/products');
        data = yield data.json();
    console.warn("Get products_saga", data) 
    yield put({type: typeCart.SET_PRODUCT_LIST, data})
}

function* productSaga() {
    yield takeEvery(typeCart.PRODUCT_LIST, getProducts)
}

export default productSaga