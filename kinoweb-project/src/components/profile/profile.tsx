import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom"
import { Box, CircularProgress } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";

import { dbFirebase } from "../../firebase";
import { fetchFilms, getFavoritFilm,IFavoritsFilms } from "../../redux/reducers/filmsReducer";
import { AppDispatch, useAppSelectorType } from "../../redux/store/store";
import { FilmWrapper } from "../films/fimsComponents/filmComponentsStyled";
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { ThemeContext } from "../providers/themeProvider";
import { useAuth } from "../registration/auth";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock } from "../shared/styledComponents";

import imgBack from "./profile.jpg"
import { ProfileFavorite } from "./profileFavorite";
import { FavoritsFilmstitle } from "./profileStyles";

export const Profile = () =>{

    const themes = useContext(ThemeContext);

    const [postLists, setPostList] = useState<any>([]);
    const [ profileFavoritFilms , getProfFavFilms] = useState<any>([])

    const favoritsFilms = useAppSelectorType((state) => state.films.rendFilms)
    const fetchingValue = useAppSelectorType((state) => state.films.filmsFetching)

    const { isAuth, email } = useAuth();

    const dispatch = useDispatch<AppDispatch>()

    const user = useAppSelectorType((state) => state.auth.user)
    const logState = useAppSelectorType((state) => state.auth.logState)

    useEffect(() => {
        if(logState){
            const filmsRef = doc(dbFirebase, "favorits", user?.uid)
            const getFavData = onSnapshot(filmsRef, (film) =>{
                if(film.exists()){
                    const filmData = film.data()
                    dispatch(getFavoritFilm({ filmData }))
                    console.log("Документ пришёл")
                    console.log(filmData.favorits)
                    
                }else{
                    console.log("No Items in db");
                }
            })
            return () => {
                getFavData();
            }
        }

    }, [logState]);

    useEffect(() => {
        dispatch(fetchFilms())
    },[fetchingValue])
    
    return isAuth ? (
        
        <Container colorbg = {themes.BACKGROUND_THEME}>
            <BanerContainer backimage={imgBack}>
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                            Welcom to profile!
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer>
            <SpaceLine></SpaceLine>
                <div style={{ padding:'20px' }}>
                    <FilmWrapper>
                        <FavoritsFilmstitle>Favorits Films:</FavoritsFilmstitle>
                        {favoritsFilms.map((item, index)=>(
                            <ProfileFavorite 
                            key={index} 
                            id={item.id}
                            poster={item.poster.previewUrl} 
                            filmTitle={item.alternativeName}
                            altFilmName={item.name}
                            />
                        ))}
                    </FilmWrapper>              
                </div>     
                <SpaceLine></SpaceLine>         
        </Container>
    ) :(
        <Navigate to="/Login"/>
    )
}   