import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { burgerSlice } from "../reducers/burgerReduser";

export const store = configureStore ({
    reducer:burgerSlice.reducer,
})
//1. Способ типизации
export type StoreType = ReturnType<typeof store.getState>;
//2. Способ типизции
export const useAppSelectorType: TypedUseSelectorHook<StoreType> = useSelector;

export type AppDispatch = typeof store.dispatch;