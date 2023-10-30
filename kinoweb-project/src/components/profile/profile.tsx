import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom"
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { ThemeContext } from "styled-components";

import { dbFirebase } from "../../firebase";
import { getFavoritFilm } from "../../redux/reducers/filmsReducer";
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

    const favoritsCollection = collection(dbFirebase,"favorits")

    const favoritsFilms = useAppSelectorType((state) => state.films.favoritsFilms)

    const { isAuth, email } = useAuth();

    const dispatch = useDispatch<AppDispatch>()

        useEffect(() => {
          const getFavFilms = async() => {
            const data = await getDocs(favoritsCollection);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            dispatch(getFavoritFilm(postLists))
          }
          getFavFilms()

      }, []);
      const handleClick = () => {
        console.log(postLists);
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