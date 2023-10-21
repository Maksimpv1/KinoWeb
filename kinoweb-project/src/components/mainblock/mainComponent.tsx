import { MainBlockImg, MainContainer, MainDiscription, MainFirstState, MainSecondState, MainTitle, MainWrapper, SpaceLine } from "./mainBlockStyles"

interface IMainComponet {
    Title:string,
    Discription:string,
    Src:string,
    Orientation:boolean,
}

export const MainComponent = (props:IMainComponet)=>{
    return(
        <MainContainer>
           <MainWrapper>
                <MainFirstState Orient={props.Orientation}>
                    <MainTitle>{props.Title}</MainTitle>
                    <MainDiscription>{props.Discription}</MainDiscription>
                </MainFirstState>
                <MainSecondState Orient={props.Orientation}>
                    <MainBlockImg src={props.Src} />
                </MainSecondState>
           </MainWrapper>
           <SpaceLine></SpaceLine>
        </MainContainer>
    )
}