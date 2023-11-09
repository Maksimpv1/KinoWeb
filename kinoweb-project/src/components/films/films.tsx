import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, CircularProgress } from "@mui/material";

import { setFetchingFilms, setRenderFilmCard } from "../../redux/reducers/filmsReducer";
import { AppDispatch, useAppSelectorType } from "../../redux/store/store"
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { ThemeContext } from "../providers/themeProvider";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock } from "../shared/styledComponents"

import { FilmWrapper } from "./fimsComponents/filmComponentsStyled";
import { FilmFront } from "./fimsComponents/filmFrontCard";
import imgBack from "./fimsComponents/img/filmsback.jpg";

export const Films = () => {

    const dispatch = useDispatch<AppDispatch>()

    const themes = useContext(ThemeContext);

    const filmsData = useAppSelectorType((state)=>state.films.films )
    const loadingRedux = useAppSelectorType((state) => state.films.loadingFilms)
    const errorRedux = useAppSelectorType((state) => state.films.errorMes)

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        setTimeout(() => {
            if (scrollTop + clientHeight >= scrollHeight ) {
                dispatch(setFetchingFilms())
              }                    
        }, 1000);
      };

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        dispatch(setRenderFilmCard({ renderValue: true }))
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])



    return(
        <>
            {!! errorRedux && <h2>Походу лимит на запросы</h2> }
            <Container colorbg = {themes.BACKGROUND_THEME}>
            <BanerContainer backimage={imgBack}>
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                            Movies, TV series and much more without restrictions
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer> 
                <SpaceLine></SpaceLine>
                <div style={{ padding:'20px' }}>
                    <FilmWrapper>
                        {filmsData.map((item, index)=>(
                            <FilmFront 
                            key={index} 
                            id={item.id}
                            poster={item.poster.previewUrl} 
                            filmTitle={item.alternativeName}
                            altFilmName={item.name}
                            />
                        ))}                        
                    </FilmWrapper>    
                    {loadingRedux && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}><CircularProgress /></Box>}                
                </div>     
                <SpaceLine></SpaceLine>      
            </Container>
            </>
    )
}