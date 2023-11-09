import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { addFilmsToFavorits, deleteFilmsFromFavorits, viewFilmCard } from "../../../redux/reducers/filmsReducer";
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

    useEffect(()=>{
        dispatch(viewFilmCard({ filmId:paramss.id }))
        window.scrollTo(0, 0);
    },[])

    const filmData = useAppSelectorType((state) =>  state.films.film )
    const loginState = useAppSelectorType((state) => state.auth.logState)
    const favFims = useAppSelectorType((state) => state.films.favoritsFilms.favorits)

    const paramss = useParams();

    const [inFIlmslist, setInFIlmslist] = useState<boolean>(false)

    const { isAuth } = useAuth();

    useEffect(()=>{
        if(isAuth){
            setInFIlmslist(favFims.some((item) => item.id === filmData.id)) 
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
            <BanerContainer backimage={filmData.logo.url ? filmData.logo.url :imgBack} backimageSmall={true} >
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                            {filmData.filmTitle ? filmData.filmTitle : filmData.altFilmName}
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer> 
            <SpaceLine></SpaceLine>
                <div style={{ padding:'20px' }}>
                    <FilmPageWrapper>
                        <FilmMainTitle>{filmData.name}</FilmMainTitle>
                        <FilmMain>
                            <FilmMainLeft>
                                <FilmMainPoster src={filmData.poster.url}/>                  
                            </FilmMainLeft>
                            <FilmMainRight>
                                <FilmGenresList>
                                    <FilmGenresTitle>Genres: </FilmGenresTitle>
                                    {filmData.genres.map((item) => (
                                        <FilmGenresListProp key={item.name}> — {item.name}</FilmGenresListProp>
                                    ))}
                                </FilmGenresList>
                                <FilmGenresList>
                                    <FilmGenresTitle>Released: </FilmGenresTitle>
                                        <FilmGenresListProp> {filmData.year}</FilmGenresListProp>
                                </FilmGenresList>
                                <FilmAddFavorits onClick={ inFIlmslist ? deleteFavorits : addToFavorits}>
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
            <SpaceLine></SpaceLine>   
        </Container>
    )
}