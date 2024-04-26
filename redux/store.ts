import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { dummyReducer } from "./reducer";
import AddToCart from "./action";


export const store = configureStore({
reducer:    {
    reducer1: dummyReducer,
},
});