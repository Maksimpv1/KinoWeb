import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { ThemeContext } from "styled-components";

import { auth, dbFirebase } from "../../firebase";
import { setUser } from "../../redux/reducers/authorisation";
import { getFavoritFilm,IFavoritsFilms } from "../../redux/reducers/filmsReducer";
import { AppDispatch, useAppSelectorType } from "../../redux/store/store";
import { FilmWrapper } from "../films/fimsComponents/filmComponentsStyled";
import { FilmFront } from "../films/fimsComponents/filmFrontCard";
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { useAuth } from "../registration/auth";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock } from "../shared/styledComponents";

import imgBack from "./profile.jpg"
import { FavoritsFilmstitle } from "./profileStyles";

export const Profile = () =>{

    const [postLists, setPostList] = useState<any>([]);
    const [ profileFavoritFilms , getProfFavFilms] = useState<any>([])

    const favoritsCollection = collection(dbFirebase,"favorits")

    const favoritsFilms = useAppSelectorType((state) => state.films.favoritsFilms)
    const authUser = useAppSelectorType((state) => state.auth.user.email )
    const authUserInfo = useAppSelectorType((state) => state.auth.user )

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
                    console.log(filmData)
                    
                }else{
                    console.log("No Items in db");
                }
            })
            return () => {
                getFavData();
            }
        }

    }, [logState]);
      const handleClick = () => {
        console.log(favoritsFilms)
      };
    
    return isAuth ? (
        
        <Container>
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
                        <button onClick={handleClick}>Get films</button>
                    </FilmWrapper>              
                </div>     
                <SpaceLine></SpaceLine>         
        </Container>
    ) :(
        <Navigate to="/Login"/>
    )
}   