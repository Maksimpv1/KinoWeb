import { createSlice } from "@reduxjs/toolkit";

import { IinitialStateAuth } from "./reducerstype";

const initialState:IinitialStateAuth = {
    user: {
        email: '',
        password: '',
        token: '',
        uid: '',
    },
    logState:false,
}

export const authSlice = createSlice({
    name:"Users",
    initialState,
    reducers:{
        setUser:(state,action)=> {
            state.user.email = action.payload.email
            state.user.password = action.payload.password
            state.user.token = action.payload.token
            state.user.uid = action.payload.id
        },
        removeUser:(state)=>{
            state.user.email = ''
            state.user.password = ''
            state.user.token = ''
            state.user.uid = ''
        },
        loginStateSwitch:(state, action)=>{
            state.logState = action.payload.LogStateBol
        },
    }
})

export const { setUser,removeUser,loginStateSwitch } = authSlice.actions

export default authSlice.reducer