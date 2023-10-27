import { useContext } from "react";

import { useAppSelectorType } from "../../redux/store/store"
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { ThemeContext } from "../providers/themeProvider";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock } from "../shared/styledComponents"

import { FilmWrapper } from "./fimsComponents/filmComponentsStyled";
import { FilmFront } from "./fimsComponents/filmFrontCard";
import imgBack from "./fimsComponents/img/filmsback.jpg";

export const Films = () => {
    
    const themes = useContext(ThemeContext);

    const filmsData = useAppSelectorType((state)=>state.films.films )


    return(
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