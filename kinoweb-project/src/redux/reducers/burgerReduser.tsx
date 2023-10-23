import { createSlice } from "@reduxjs/toolkit";

import { IinitialState } from "./reducerstype";


const initialState:IinitialState = {
    test:'hello'
}

export const burgerSlice:any = createSlice({
    name: "System name",
    initialState,
    reducers:{
    }
})