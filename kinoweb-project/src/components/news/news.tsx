import { useContext } from "react";

import { SpaceLine } from "../mainblock/mainBlockStyles";
import { ThemeContext } from "../providers/themeProvider";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock } from "../shared/styledComponents"

import imgBack from "./img/NewsBack.jpg";
import { NewsContainer, NewsTitle,Newswrapper } from "./newsStyles";

export const News = () => {

    const themeSw = useContext(ThemeContext)!;
    
    return(
        <NewsContainer>
            <BanerContainer backimage={imgBack}>
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                            See the latest news
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer>             
            <SpaceLine></SpaceLine>
            <Container colorbg={themeSw.BACKGROUND_THEME}>
                <Newswrapper>
                    <NewsTitle>
                        No news yet, but you can visit the films page
                    </NewsTitle>
                </Newswrapper> 
            </Container>        
            <SpaceLine></SpaceLine> 
        </NewsContainer>
    )
}