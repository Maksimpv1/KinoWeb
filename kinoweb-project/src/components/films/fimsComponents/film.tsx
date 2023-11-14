import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

import { addFilmsToFavorits, deleteFilmsFromFavorits, soloFilmCardFetch, viewFilmCard } from "../../../redux/reducers/filmsReducer";
import { AppDispatch, useAppSelectorType } from "../../../redux/store/store";
import { SpaceLine } from "../../mainblock/mainBlockStyles";
import { ThemeContext } from "../../providers/themeProvider";
import { useAuth } from "../../registration/auth";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock } from "../../shared/styledComponents";

import imgBack from "./img/banner.jpg"
import { FilmAddFavorits, FilmGenresList, FilmGenresListProp, FilmGenresTitle, FilmMain, FilmMainLeft, FilmMainPoster, FilmMainRight, FilmMainTitle, FilmPageWrapper } from "./filmComponentsStyled";

export const Film = () => {

    const dispatch = useDispatch<AppDispatch>();

    const themes = useContext(ThemeContext);

    const paramss = useParams();

    const idFilms =  paramss.id ? +paramss.id : null


    useEffect(()=>{
        if(paramss.id){
        dispatch(soloFilmCardFetch( idFilms ))
        console.log(favFims)
        console.log(idFilms)
        console.log( setInFIlmslist(favFims.some((item) => item.id === idFilms)))
        window.scrollTo(0, 0);
        }
    },[])

    const filmData = useAppSelectorType((state) =>  state.films.film[0] )
    const loginState = useAppSelectorType((state) => state.auth.logState)
    const favFims = useAppSelectorType((state) => state.films.favoritsFilms.favorits)
    const loading = useAppSelectorType((state) => state.films.loadingSoloFilm)

    const [inFIlmslist, setInFIlmslist] = useState<boolean>(false)

    const { isAuth } = useAuth();

    
     useEffect(()=>{
         if(isAuth){
            setInFIlmslist(favFims.some((item) => item.id === idFilms)) 
         } else {
             setInFIlmslist(false)
        }
     },[favFims])

    const addToFavorits = async () => {
         dispatch(addFilmsToFavorits(filmData))
     } 

    const deleteFavorits = async () => {
        dispatch(deleteFilmsFromFavorits(filmData))
    }
    
    return (
        <Container colorbg = {themes.BACKGROUND_THEME}>
            <BanerContainer backimage={filmData.logo?.url ? filmData.logo.url :imgBack} backimageSmall={true} >
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                            {filmData.filmTitle ? filmData.filmTitle : filmData.altFilmName}
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer> 
            <SpaceLine></SpaceLine>
            {loading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <CircularProgress /></Box> :
                <div style={{ padding:'20px' }}>
                    <FilmPageWrapper>
                        <FilmMainTitle>{filmData.name}</FilmMainTitle>
                        <FilmMain>
                            <FilmMainLeft>
                                <FilmMainPoster src={filmData.poster?.url}/>                  
                            </FilmMainLeft>
                            <FilmMainRight>
                                <FilmGenresList>
                                    <FilmGenresTitle>Genres: </FilmGenresTitle>
                                    {filmData.genres.map((item : { name: string }) => (
                                        <FilmGenresListProp key={item.name}> — {item.name}</FilmGenresListProp>
                                    ))} 
                                </FilmGenresList>
                                <FilmGenresList>
                                    <FilmGenresTitle>Released: </FilmGenresTitle>
                                        <FilmGenresListProp> {filmData.year}</FilmGenresListProp>
                                </FilmGenresList>
                                <FilmAddFavorits 
                                onClick={ inFIlmslist ? deleteFavorits : addToFavorits }
                                enabled={loginState}
                                disabled={!loginState}>
                                { inFIlmslist ? "Delete from Favorits" : "Add to Favorits"}</FilmAddFavorits>
                            </FilmMainRight>
                        </FilmMain>
                        <FilmGenresList>
                            <FilmGenresTitle>Description: </FilmGenresTitle>
                            <FilmGenresListProp>
                                {filmData.description}
                            </FilmGenresListProp>
                        </FilmGenresList>
                    </FilmPageWrapper>
                </div>
                }
            <SpaceLine></SpaceLine>   
        </Container>
    )
}