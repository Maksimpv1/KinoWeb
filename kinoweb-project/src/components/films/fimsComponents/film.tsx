import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { viewFilmCard } from "../../../redux/reducers/filmsReducer";
import { AppDispatch, useAppSelectorType } from "../../../redux/store/store";

export const Film = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(viewFilmCard({ filmId:paramss.id }))
    },[])

    const filmData = useAppSelectorType((state) => state.films.film )

    const paramss = useParams();
    
    return (
        <div>
            <h2>{filmData.name}</h2>
        </div>
    )
}