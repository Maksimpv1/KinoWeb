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

    const favFims = useAppSelectorType((state) => state.films.favoritsFilms)
    const loginState = useAppSelectorType((state) => state.auth.logState)
    const authUser = useAppSelectorType((state) => state.auth.user.email )

    const favoritsCollection = collection(dbFirebase, "favorits")

    const userUid = useAppSelectorType((state) => state.auth.user.uid)

    const addToFavorits = async () => {
        setNoneUserValue(false)
        if(favFims){
            favFims.forEach(async (item:any)=>{
            if(item.author.email === authUser ){
                console.log('hi')
                if (userUid){
                    const documentRef = doc(dbFirebase, "favorits", userUid)
                    await setDoc(documentRef,  {
                        favorits:[...item.favorits, { title:props.filmTitle, id: props.id } ]
                    })
                }
            }else{
                setNoneUserValue(true)
            }
            })
        }
        if(noneUserValue){
            await addDoc(favoritsCollection , {
                id:props.id.toString(),
                favorits:[{
                    title:props.filmTitle,
                    id: props.id,
                }],
                author: { email: auth.currentUser?.email, id: auth.currentUser?.uid }
            });
            console.log('Добавлен ' + props.id)
        }
    }
    // const deleteFilm = async (id: string) => {
    //     const userDoc = doc(dbFirebase, "favorits", id);
    //     await deleteDoc(userDoc);
    //     console.log(userUid)
    // }
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