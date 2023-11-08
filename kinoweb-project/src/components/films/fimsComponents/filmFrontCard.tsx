import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { doc, onSnapshot, setDoc } from "firebase/firestore"

import {  dbFirebase } from "../../../firebase"
import { getFavoritFilm } from "../../../redux/reducers/filmsReducer"
import { AppDispatch, useAppSelectorType } from "../../../redux/store/store"
import { useAuth } from "../../registration/auth"

import deleteIcon from "./img/delete.png"
import saveIcon from "./img/save.png"
import { CardWrapper, PreviewBtnsWrappper, PreviewButton, PreviewIconWrap, PreviewImg, PreviewTitle } from "./filmComponentsStyled"

export interface IFilmFront {
    poster:string,
    filmTitle:string,
    altFilmName:string,
    id:number,
}


export const FilmFront = (props:IFilmFront) => {

    const dispatch = useDispatch<AppDispatch>()

    const [inFIlmslist, setInFIlmslist] = useState<boolean>(false)

    const favFims = useAppSelectorType((state) => state.films.favoritsFilms.favorits)
    const loginState = useAppSelectorType((state) => state.auth.logState)
    const user = useAppSelectorType((state) => state.auth.user)

    const { isAuth, email } = useAuth();

    const logState = useAppSelectorType((state) => state.auth.logState)


    useEffect(()=>{
        if(isAuth){
            setInFIlmslist(favFims.some((item) => item.id === props.id)) 
        } else {
            setInFIlmslist(false)
        }
    },[])

    
    const addToFavorits = async () => {
        const filmsRef = doc(dbFirebase, "favorits" , user.uid)
        try{
            setInFIlmslist(true)
            await setDoc(
                filmsRef, 
                {
                    favorits: favFims ?
                    [ ...favFims , { id:props.id, title: props.filmTitle } ]
                    : [ { id:props.id, title: props.filmTitle } ]
                    
                }
            )
            console.log("Вроде отработало но нет")
        }catch(error){
            console.log("Ошибка добавления фильма")
        }
    } 
    return( 
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
                <PreviewIconWrap onClick={addToFavorits} enabled={loginState} disabled={!loginState} >
                    <img style={{ width:'25px' }} src={inFIlmslist ? deleteIcon : saveIcon }></img>
                </PreviewIconWrap>
            </PreviewBtnsWrappper>       
        </CardWrapper>
    )
}