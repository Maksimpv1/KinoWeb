import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

import { deleteFilmsFromFavorits } from "../../redux/reducers/filmsReducer"
import { AppDispatch, useAppSelectorType } from "../../redux/store/store"
import { CardWrapper, PreviewBtnsWrappper, PreviewButton, PreviewIconWrap, PreviewImg, PreviewTitle } from "../films/fimsComponents/filmComponentsStyled"
import { IFilmFront } from "../films/fimsComponents/filmFrontCard"
import { useAuth } from "../registration/auth"

import deleteIcon from "./delete.png"
import saveIcon from "./save.png"

export const ProfileFavorite = (props:IFilmFront) => {
    
    const dispatch = useDispatch<AppDispatch>()

    const [inFIlmslist, setInFIlmslist] = useState<boolean>(false)
    
    const loginState = useAppSelectorType((state) => state.auth.logState)
    const favFims = useAppSelectorType((state) => state.films.favoritsFilms.favorits)

    const { isAuth, email } = useAuth();

    useEffect(()=>{
        if(isAuth){
            setInFIlmslist(favFims.some((item) => item.id === props.id)) 
        } else {
            setInFIlmslist(false)
        }
    },[favFims])

    const deleteFavorits = async () => {
        dispatch(deleteFilmsFromFavorits(props))
    }

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
                <PreviewIconWrap onClick={deleteFavorits} enabled={loginState} disabled={!loginState} >
                    <img style={{ width:'25px' }} src={inFIlmslist  ? deleteIcon : saveIcon}></img>
                </PreviewIconWrap>
            </PreviewBtnsWrappper>       
        </CardWrapper>
    )
}