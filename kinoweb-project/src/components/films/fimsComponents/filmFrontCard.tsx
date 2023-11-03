import { useState } from "react"
import { NavLink } from "react-router-dom"
import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore"

import { auth, dbFirebase } from "../../../firebase"
import { useAppSelectorType } from "../../../redux/store/store"

import saveIcon from "./img/save.png"
import { CardWrapper, PreviewBtnsWrappper, PreviewButton, PreviewIconWrap, PreviewImg, PreviewTitle } from "./filmComponentsStyled"

interface IFilmFront {
    poster:string,
    filmTitle:string,
    altFilmName:string,
    id:number,
}


export const FilmFront = (props:IFilmFront) => {

    const [noneUserValue, setNoneUserValue] = useState<boolean>(false)

    const favFims = useAppSelectorType((state) => state.films.favoritsFilms.favorits)
    const loginState = useAppSelectorType((state) => state.auth.logState)
    const authUser = useAppSelectorType((state) => state.auth.user.email )
    const user = useAppSelectorType((state) => state.auth.user)

    const favoritsCollection = collection(dbFirebase, "favorits")

   // const inFIlmslist = favFims.includes(props.id);

    const addToFavorits = async () => {
        const filmsRef = doc(dbFirebase, "favorits" , user.uid)
        try{
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
                    <img style={{ width:'25px' }} src={saveIcon}></img>
                </PreviewIconWrap>
            </PreviewBtnsWrappper>       
        </CardWrapper>
    )
}