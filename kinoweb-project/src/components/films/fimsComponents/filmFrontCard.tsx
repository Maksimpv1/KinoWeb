import { NavLink } from "react-router-dom"

import saveIcon from "./img/save.png"
import { CardWrapper, PreviewBtnsWrappper, PreviewButton, PreviewIconWrap, PreviewImg, PreviewTitle } from "./filmComponentsStyled"

interface IFilmFront {
    poster:string,
    filmTitle:string,
    altFilmName:string,
    id:number,
}


export const FilmFront = (props:IFilmFront) => {
    return( 
        <CardWrapper>
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
                <PreviewIconWrap>
                    <img style={{ width:'25px' }} src={saveIcon}></img>
                </PreviewIconWrap>
            </PreviewBtnsWrappper>       
        </CardWrapper>
    )
}