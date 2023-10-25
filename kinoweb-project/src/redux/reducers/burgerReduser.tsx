import { createSlice } from "@reduxjs/toolkit";

import { IinitialState } from "./reducerstype";


const initialState:IinitialState = {
    burgerShow:false,
    burgerHandle:false,
}

export const burgerSlice = createSlice({
    name: "System name",
    initialState,
    reducers:{
        changeValueBurgerShow:(state,action)=>{
            state.burgerShow = action.payload.value
        },
        changeValueBurgerHandle:(state,action)=>{
            state.burgerHandle = !state.burgerHandle
            if(action.payload.value === false){
                state.burgerHandle = action.payload.value
            }
        },
    }
})

export const { changeValueBurgerShow,changeValueBurgerHandle } = burgerSlice.actions