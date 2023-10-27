import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "../reducers/authorisation";
import { burgerSlice } from "../reducers/burgerReduser";
import { filmSlice } from "../reducers/filmsReducer";

export const store = configureStore ({
    reducer: {
        burger:burgerSlice.reducer,
        auth:authSlice.reducer,
        films:filmSlice.reducer,
    }
})
export type StoreType = ReturnType<typeof store.getState>;

export const useAppSelectorType: TypedUseSelectorHook<StoreType> = useSelector;

export type AppDispatch = typeof store.dispatch;