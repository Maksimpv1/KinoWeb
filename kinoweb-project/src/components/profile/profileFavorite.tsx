import { NavLink } from "react-router-dom"

import { IfilmsData } from "../../redux/reducers/reducerstype"
import { useAppSelectorType } from "../../redux/store/store"
import { CardWrapper, PreviewBtnsWrappper, PreviewButton, PreviewIconWrap, PreviewImg, PreviewTitle } from "../films/fimsComponents/filmComponentsStyled"
import { IFilmFront } from "../films/fimsComponents/filmFrontCard"

import saveIcon from "./save.png"

export const ProfileFavorite = (props:IFilmFront) => {
    
    const loginState = useAppSelectorType((state) => state.auth.logState)


    return (
        <CardWrapper key={props.id}>
            <div>
                <PreviewImg src={props.poster}></PreviewImg>
            </div>  
            <div>            
                <PreviewTitle>{props.filmTitle ? props.filmTitle : props.altFilmName}</PreviewTitle> 
            </div> 
            <PreviewBtnsWrappper>
                <NavLink 
                to={`/Film/${props.id}`} 
                style={{ textDecoration:'none',color:'black' }}
                >
                    <PreviewButton>View film</PreviewButton>
                </NavLink>
                <PreviewIconWrap /*onClick={addToFavorits}*/ enabled={loginState} disabled={!loginState} >
                    <img style={{ width:'25px' }} src={saveIcon}></img>
                </PreviewIconWrap>
            </PreviewBtnsWrappper>       
        </CardWrapper>
    )
}