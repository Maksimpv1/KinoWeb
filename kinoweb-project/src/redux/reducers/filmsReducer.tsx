import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { axiosApiConfig } from "../../api/axiosConfig"

import { IfilmsData } from "./reducerstype";


interface IinitialState{
    films:Array<IfilmsData>,
    film:IfilmsData,
    loadingFilms:boolean,
    errorMes:string | null | unknown,
}

const initialState:IinitialState = {
    films:[],
    loadingFilms:false,
    errorMes:'',
    film:{
        id: 0,
        filmTitle: '',
        altFilmName:'',
        alternativeName:'',
        description:'',
        genres:[],
        name:'',
        poster:{
            previewUrl:'',
            url:'',
        },
        shortDescription:'',
        year:0,
        logo:{
            url:'',
        },
    },
}
interface Iresponse {
    data:{
        docs:IfilmsData[]
    }
}

export const fetchFilms =  createAsyncThunk(
    "posts/fetchPosts",
    async (_, { dispatch, rejectWithValue }) => {
        try{
            const limit =  20;
            const response:Iresponse = await axiosApiConfig.get('/v1.3/movie?_limit=20' ,  { params: { limit } })
            const films = response.data.docs
            dispatch(getFilms(films)) 
        } catch (error: unknown) {
            if (error instanceof Error) {
              console.log((error as Error).message);
              return rejectWithValue(error.message);
            } else {
              console.log("Unknown error occurred");
              return rejectWithValue("Unknown error occurred");
            }
          }
    })



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
    },
    extraReducers: (builder)=>
    builder
    .addCase(fetchFilms.pending, (state)=>{
        state.loadingFilms = true;
        state.errorMes = null;
    }) //Первый этап загрузки
    .addCase(fetchFilms.fulfilled, (state)=>{
        state.loadingFilms = false;
    }) //Второй этам этап когда всё загрузилось
    .addCase(fetchFilms.rejected,(state, action) => {
        state.loadingFilms = false;
        state.errorMes = action.payload;
    }) //Третий этап ошибки
})

export const { getFilms,viewFilmCard } = filmSlice.actions