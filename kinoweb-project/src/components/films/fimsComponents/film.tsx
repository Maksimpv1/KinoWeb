import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { viewFilmCard } from "../../../redux/reducers/filmsReducer";
import { AppDispatch, useAppSelectorType } from "../../../redux/store/store";
import { SpaceLine } from "../../mainblock/mainBlockStyles";
import { ThemeContext } from "../../providers/themeProvider";
import { Container } from "../../shared/styledComponents";

import { FilmWrapper } from "./filmComponentsStyled";

export const Film = () => {

    const dispatch = useDispatch<AppDispatch>();

    const themes = useContext(ThemeContext);

    useEffect(()=>{
        dispatch(viewFilmCard({ filmId:paramss.id }))
    },[])

    const filmData = useAppSelectorType((state) => state.films.film )

    const paramss = useParams();
    
    return (
        <Container colorbg = {themes.BACKGROUND_THEME}>
            <SpaceLine></SpaceLine>
                <div style={{ padding:'20px' }}>
                    <FilmWrapper>                        
                        <h2>{filmData.name}</h2>
                    </FilmWrapper>
                </div>
            <SpaceLine></SpaceLine>   
        </Container>
    )
}