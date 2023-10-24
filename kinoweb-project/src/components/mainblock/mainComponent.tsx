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
        <MainContainer  colorbg = {themes.BACKGROUND_THEME}>
           <MainWrapper>
                <MainFirstState orientation={props.Orientation.toString()}>
                    <MainTitle colortext={themes.TEXT_THEME}>{props.Title}</MainTitle>
                    <MainDiscription colortext={themes.TEXT_THEME}>{props.Discription}</MainDiscription>
                </MainFirstState>
                <MainSecondState orientation={props.Orientation.toString()}>
                    <MainBlockImg src={props.Src} />
                </MainSecondState>
           </MainWrapper>
           <SpaceLine></SpaceLine>
        </MainContainer>
    )
}