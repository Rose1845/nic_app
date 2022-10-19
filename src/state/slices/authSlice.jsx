import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
   
    name:'auth',
    user:undefined,
    initialState:{isLoggedIn:false},
    reducers:{
        loginUser:(state,action)=>{
            state.isLoggedIn = true,
            state.user=action.payload;

        },
        logoutUser:(state,action)=>{
            state.isLoggedIn=false,
            state.user=initialState.user
        }

    }
})
export const {loginUser,logoutUser}=authSlice.actions
export default authSlice.reducer