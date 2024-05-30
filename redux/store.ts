import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import productSaga from "./productSaga";
import rootReducer from "./rootReducer";

const sagaMiddleWare = createSagaMiddleWare(); //create saga middleware
const middlewares = [sagaMiddleWare]; //create middlewares array to add further middlewares like saga.
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares), // Include default middleware
});
sagaMiddleWare.run(productSaga);
