import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    isLoggedIn:false,
    name:auth,
    user:undefined,
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            state.isLoggedIn = true,
            state.user=action.payload

        },
        logoutUser:(state,action)=>{
            state.isLoggedIn=false,
            state.user=initialState.user
        }

    }
})
export const {loginUser,logoutUser}=action.reducers
export default authSlice