import { configureStore } from "@reduxjs/toolkit";
import aptoReducer from './apto/aptoSlice'

const store = configureStore({
    reducer: {
        aptos: aptoReducer
    }
});

export default store;