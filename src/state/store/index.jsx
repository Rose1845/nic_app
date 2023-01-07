import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../slices/authSlice'
import userSLice from "../slices/userSLice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        user:userSLice
    }
})
export default store