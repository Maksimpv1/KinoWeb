import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { doc, setDoc, updateDoc } from "firebase/firestore";

import { axiosApiConfig } from "../../api/axiosConfig"
import { dbFirebase } from "../../firebase";
import { StoreType } from "../store/store";

import { IfilmsData } from "./reducerstype";


interface IinitialState{
    filmsFetching:boolean,
    filmsCurrentPage:number,
    films:Array<IfilmsData>,
    film:Array<IfilmsData>,
    rendFilms:Array<IfilmsData>,
    loadingFilms:boolean,
    errorMes:string | null | unknown,
    searchfilms:Array<IfilmsData>,
    renderfilmCard:boolean,
    favoritsFilms:IFavoritsFilms,
    loadingSoloFilm:boolean,
}

export interface IFavoritsFilms {
    id?:string,
    favorits:Array<{
        id:number,
        title:string,
    }>
    author?:{
        id:string,
        email:string,
    }
}

const initialState:IinitialState = {
    favoritsFilms: {
        favorits:[]
    },
    filmsFetching:true,
    filmsCurrentPage:1,
    films:[],
    rendFilms:[],
    loadingFilms:false,
    loadingSoloFilm:false,
    errorMes:'',
    renderfilmCard:false,
    searchfilms:[],
    film:[
        {
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
        }],
}
interface Iresponse {
    data:{
        docs:IfilmsData[]
    }
}

export const fetchFilms =  createAsyncThunk(
    "films/fetchPosts",
    async (_, { dispatch, rejectWithValue, getState }) => {     
        const state = getState() as StoreType;
        if( state.films.filmsFetching ) {
        try{
            const limit =  20;
            const response:Iresponse = await axiosApiConfig.get('/v1.3/movie' ,  { params: { limit , page: state.films.filmsCurrentPage } })
            const films = response.data.docs
            dispatch(getFilms(films))
            dispatch(setNextFilmsPage())
        } catch (error: unknown) {
            if (error instanceof Error) {
              console.log((error as Error).message);
              return rejectWithValue(error.message);
            } else {
              console.log("Unknown error occurred");
              return rejectWithValue("Unknown error occurred");
            }
          }
          finally{
            dispatch(setFetchingFilms())
          }
        }
    })


export const searchFilms = createAsyncThunk(
    "films/searchfilms",
    async(searchedValue:string,{  rejectWithValue }) => {
        try{
            const response:Iresponse = await axiosApiConfig.get('/v1.3/movie' , { params: { name: searchedValue, limit: 20 } })
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

    export const addFilmsToFavorits = createAsyncThunk(
        "films/addFilmsToFav",
        async(film: { id: number; filmTitle: string ; name?: string }, { getState }) => {
            const state = getState() as StoreType;
            const filmsRef = doc(dbFirebase, 'favorits', state.auth.user.uid);      
            try{
                await updateDoc(filmsRef, {
                    favorits: state.films.favoritsFilms.favorits
                    ? [...state.films.favoritsFilms.favorits, { id: film.id,
                         title: film.filmTitle ? film.filmTitle : film.name }]
                    : [{ id: film.id, title: film.filmTitle ? film.filmTitle : film.name }],
                });
                console.log('Фильм успешно добавлен в избранное');
            }catch (error: unknown) {
                console.log("Ошибка добавления фильма - " + error )
            }     }
    )

    export const deleteFilmsFromFavorits = createAsyncThunk(
        "films/deleteFilmsFromFav",
        async(film: {id: number } , { getState }) => {
            const state = getState() as StoreType;
            const filmsRef = doc(dbFirebase, 'favorits', state.auth.user.uid);
            try{
                await setDoc(
                    filmsRef,
                    { favorits: state.films.favoritsFilms.favorits.filter((item) => item.id !== film.id) },
                  );                 
            }catch(error: unknown){
                console.log("Ошибка Удаления")
            }
        }
    )

    export const profilFilmFetch = createAsyncThunk(
        "film/favoritFilms",
        async(film: { id: number, title:string } , { dispatch }) => {
            try{
                const response:Iresponse = await axiosApiConfig.get('/v1.3/movie' , { params: { id: film.id } })
                const films = response.data.docs
                dispatch(renderProfilFilms(films))
            }catch{
                console.log('Ошибка при вызове фильмов в профиль')
            }
        }
    )
    export const soloFilmCardFetch = createAsyncThunk(
        "film/soloFilmCardFetch",
        async(filmId: number | null , { dispatch, rejectWithValue }) => {
            try{
                const response:Iresponse = await axiosApiConfig.get('/v1.3/movie' , { params: { id: filmId } })
                const film = response.data.docs
                dispatch(viewFilmCard(film))
            }catch (error: unknown) {
                if (error instanceof Error) {
                  console.log((error as Error).message);
                  return rejectWithValue(error.message);
                } else {
                  console.log("Unknown error occurred");
                  return rejectWithValue("Unknown error occurred");
                }
              }
        }
    )


export const filmSlice = createSlice({
    name:"Films",
    initialState,
    reducers:{ 
        getFilms:(state, action) => {
            state.films = [...state.films, ...action.payload]
        },
        viewFilmCard: (state, action) => {
            state.film = action.payload
        },
        setRenderFilmCard: (state,action) => {
            state.renderfilmCard = action.payload.renderValue
        },
        setFetchingFilms: (state) => {
            state.filmsFetching ? state.filmsFetching = false : state.filmsFetching = true
        },
        setNextFilmsPage: (state) => {
            state.filmsCurrentPage = state.filmsCurrentPage + 1
        },
        getFavoritFilm: (state, action) => {
            state.favoritsFilms.favorits = action.payload.filmData.favorits

            const rendFimls = state.films.filter(
                (item) => action.payload.filmData.favorits.some((filmId:any) => filmId.id === item.id)
            )
            state.rendFilms = rendFimls
        },
        renderProfilFilms: (state, action) => {
            state.rendFilms = [...state.rendFilms, action.payload[0] ]
        },
        renderVelueNulled: (state) => {
            state.rendFilms = []
        },
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
    .addCase(soloFilmCardFetch.pending, (state) =>{
        state.loadingSoloFilm = true;
        state.errorMes = null
    })
    .addCase(soloFilmCardFetch.fulfilled, (state) => {
        state.loadingSoloFilm = false
    })
    .addCase(soloFilmCardFetch.rejected , (state,action) => {
        state.loadingSoloFilm = false
        state.errorMes = action.payload
    })
})

export const { 
    getFilms,
    viewFilmCard,
    setRenderFilmCard,
    setFetchingFilms,
    setNextFilmsPage,
    renderProfilFilms,
    renderVelueNulled,
    getFavoritFilm } = filmSlice.actions