import { createSlice } from "@reduxjs/toolkit";

import { IinitialStateAuth } from "./reducerstype";

const initialState:IinitialStateAuth = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    token:null,
    id: null,
    logState: false,
}

export const authSlice = createSlice({
    name:"Users",
    initialState,
    reducers:{
        setUser:(state,action)=> {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state.password = action.payload.password
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser:(state)=>{
            state.firstName = null
            state.lastName = null
            state.email = null
            state.password = null
            state.token = null
            state.id = null
        },
        loginStateSwitch:(state)=>{
            state.logState = !state.logState
        },
    }
})

export const { setUser,removeUser,loginStateSwitch } = authSlice.actions

export default authSlice.reducer