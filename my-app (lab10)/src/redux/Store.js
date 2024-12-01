import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";

const store = configureStore({
    reducer:{
        card: itemReducer
    },
});

export default store;