import { useContext } from "react";

import { ThemeContext } from "../providers/themeProvider";

import { MainBlockImg, MainContainer, MainDiscription, MainFirstState, MainSecondState, MainTitle, MainWrapper, SpaceLine } from "./mainBlockStyles"

interface IMainComponet {
    Title:string,
    Discription:string,
    Src:string,
    Orientation:boolean,
}

export const MainComponent = (props:IMainComponet)=>{
    const themes = useContext(ThemeContext);
    return(
        <MainContainer  colorBg = {themes.BACKGROUND_THEME}>
           <MainWrapper>
                <MainFirstState Orient={props.Orientation}>
                    <MainTitle colorText={themes.TEXT_THEME}>{props.Title}</MainTitle>
                    <MainDiscription colorText={themes.TEXT_THEME}>{props.Discription}</MainDiscription>
                </MainFirstState>
                <MainSecondState Orient={props.Orientation}>
                    <MainBlockImg src={props.Src} />
                </MainSecondState>
           </MainWrapper>
           <SpaceLine></SpaceLine>
        </MainContainer>
    )
}