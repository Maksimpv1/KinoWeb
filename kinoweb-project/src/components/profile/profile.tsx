import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom"
import { doc, onSnapshot } from "firebase/firestore";
import { ThemeContext } from "styled-components";

import { dbFirebase } from "../../firebase";
import { FilmWrapper } from "../films/fimsComponents/filmComponentsStyled";
import { FilmFront } from "../films/fimsComponents/filmFrontCard";
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { useAuth } from "../registration/auth";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock } from "../shared/styledComponents";

import imgBack from "./profile.jpg"
import { FavoritsFilmstitle } from "./profileStyles";

export const Profile = () =>{

    const [user, setUser] = useState(null);
    const [favoritsFilms, setFavoritsFilms] = useState([]);

    const [watchlist, setWatchlist] = useState([]);

    const { isAuth, email} = useAuth();

        useEffect(() => {
        if (user) {
          const coinRef = doc(dbFirebase, "watchlist", user?.uid);
          const unsubscribe = onSnapshot(coinRef, (coin) => {
            if (coin.exists()) {
              console.log(coin.data().coins);
              setWatchlist(coin.data().coins);
            } else {
              console.log("No Items in Watchlist");
            }
          });
    
          return () => {
            unsubscribe();
          };
        }
      }, [user]);
    

    

    
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
                    </FilmWrapper>              
                </div>     
                <SpaceLine></SpaceLine>         
        </Container>
    ) :(
        <Navigate to="/Login"/>
    )
}   