import { useContext } from "react";

import { useAppSelectorType } from "../../redux/store/store"
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { ThemeContext } from "../providers/themeProvider";
import { Container } from "../shared/styledComponents"

import { FilmWrapper } from "./fimsComponents/filmComponentsStyled";
import { FilmFront } from "./fimsComponents/filmFrontCard";

export const Films = () => {
    
    const themes = useContext(ThemeContext);

    const filmsData = useAppSelectorType((state)=>state.films.films )


    return(
            <Container colorbg = {themes.BACKGROUND_THEME}>
                <SpaceLine></SpaceLine>
                <div style={{ padding:'20px' }}>
                    <FilmWrapper>
                        {filmsData.map((item)=>(
                            <FilmFront 
                            key={item.id} 
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
    )
}