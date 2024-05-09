import { takeEvery } from "redux-saga/effects"
import { typeCart } from "./constants"

function* getProducts() {
    console.warn("Get products")
}

function* productSaga() {
    yield takeEvery(typeCart.PRODUCT_LIST, getProducts)
}

export default productSaga