import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./DataSlice"
import authReducer from "./AuthSlice"
import basketReducer from "./BasketSlice"
export default configureStore({
    reducer: {
        data: dataReducer,
        auth: authReducer,
        basket:basketReducer,
    }
})