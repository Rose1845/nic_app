import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'user',
    initialState:{
        name:"rose",
        email:"rose@gmail.com"

    },
    reducers:{
        updateUser:(state,action)=>{
            state.user=action.payload
        },
        removeUser:(state)=>{
            state.user=null
        }
    }

})
export const {updateUser,removeUser}=userSlice.actions

export default userSlice.reducer