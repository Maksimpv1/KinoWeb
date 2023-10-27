import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { axiosApiConfig } from "../../api/axiosConfig"

import { IfilmsData } from "./reducerstype";


interface IinitialState{
    films:Array<IfilmsData>,
    film:any,
}

const initialState:IinitialState = {
    films:[],
    film:{},
}

export const fetchFilms =  createAsyncThunk(
    "posts/fetchPosts",
    async (_, { dispatch, rejectWithValue }) => {
        try{
            const limit =  20;
            const films:any = await axiosApiConfig.get('/v1.3/movie?_limit=20' ,  { params: { limit } })
            dispatch(getFilms(films.data.docs)) 
        } catch(error:any){
            console.log("faile fetch")
        }
    }
)

export const filmSlice = createSlice({
    name:"Films",
    initialState,
    reducers:{ 
        getFilms:(state, action) => {
            state.films = action.payload
        },
        viewFilmCard: (state, action) => {
            const newFilm = state.films.filter(
              (item) => item.id == action.payload.filmId                
            );
            state.film = newFilm[0];
            
        },
    }
})

export const { getFilms,viewFilmCard } = filmSlice.actions