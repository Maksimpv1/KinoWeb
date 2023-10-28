import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { axiosApiConfig } from "../../api/axiosConfig"

import { IfilmsData } from "./reducerstype";


interface IinitialState{
    films:Array<IfilmsData>,
    film:IfilmsData,
    loadingFilms:boolean,
    errorMes:string | null | unknown,
    searchfilms:Array<IfilmsData>,
    renderfilmCard:boolean,
}

const initialState:IinitialState = {
    films:[],
    loadingFilms:false,
    errorMes:'',
    renderfilmCard:false,
    searchfilms:[],
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
    "films/fetchPosts",
    async (_, { dispatch, rejectWithValue }) => {
        try{
            const limit =  20;
            const response:Iresponse = await axiosApiConfig.get('/v1.3/movie' ,  { params: { limit } })
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

export const searchFilms = createAsyncThunk(
    "films/searchfilms",
    async(searchedValue:string,{ dispatch, rejectWithValue }) => {
        try{
            const response:Iresponse = await axiosApiConfig.get('/v1.3/movie' , { params: { name: searchedValue } })
            const gotFilms = response.data.docs
            return gotFilms 
        }catch (error: unknown) {
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
            if(state.renderfilmCard){
                const newFilm = state.films.filter(
                    (item) => item.id == action.payload.filmId                
                  );
                state.film = newFilm[0];
            } else {
                const newFilm = state.searchfilms.filter(
                    (item) => item.id == action.payload.filmId                
                  );
                state.film = newFilm[0];
            }
           
            
        },
        setRenderFilmCard: (state,action) => {
            state.renderfilmCard = action.payload.renderValue
        }
    },
    extraReducers: (builder)=>
    builder
    .addCase(fetchFilms.pending, (state)=>{
        state.loadingFilms = true;
        state.errorMes = null;
    }) 
    .addCase(fetchFilms.fulfilled, (state)=>{
        state.loadingFilms = false;
    }) 
    .addCase(fetchFilms.rejected,(state, action) => {
        state.loadingFilms = false;
        state.errorMes = action.payload;
    })
    .addCase(searchFilms.fulfilled, (state,action)=>{
        state.loadingFilms = false;
        state.searchfilms = action.payload
    })  
})

export const { getFilms,viewFilmCard,setRenderFilmCard } = filmSlice.actions