import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { searchFilms, setRenderFilmCard } from "../../redux/reducers/filmsReducer";
import { AppDispatch, useAppSelectorType } from "../../redux/store/store";
import { FilmWrapper } from "../films/fimsComponents/filmComponentsStyled";
import { FilmFront } from "../films/fimsComponents/filmFrontCard";
import { SpaceLine } from "../mainblock/mainBlockStyles";
import { ThemeContext } from "../providers/themeProvider";
import { BanerContainer, BanerShadow, Container, MainTitle, MainTitleblock } from "../shared/styledComponents"

import searchIcon from "./img/search.png";
import imgBack from "./img/Searchback.jpg";
import { SearchBtn, SearchContainer, SearchInput } from "./searchStyle";

export const Search = () => {

    const dispatch = useDispatch<AppDispatch>()

    const searchedFilms = useAppSelectorType((state) => state.films.searchfilms)

    const [searchFilmsValue, setSearchFilms] = useState<string>('');

    const themes = useContext(ThemeContext);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchFilms(event.target.value)
    }
    const handleClick = () => {
        dispatch(searchFilms(searchFilmsValue))
    }
    
    useEffect(()=> {
        dispatch(setRenderFilmCard({ renderValue: false }))
    },[])

    return(
        <Container colorbg = {themes.BACKGROUND_THEME}>
            <BanerContainer backimage={imgBack}>
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                             You can find movies here
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer>
            <SpaceLine></SpaceLine>
                <div style={{ padding:'20px' }}>
                    <SearchContainer>
                        <SearchInput type="text" onChange={handleChange} placeholder="Search" />
                        <SearchBtn onClick={handleClick}><img src={searchIcon}/></SearchBtn> 
                    </SearchContainer> 
                    <FilmWrapper>                                         
                    {searchedFilms.map((item)=>(
                            <FilmFront 
                            key={item.id} 
                            id={item.id}
                            poster={item.poster.previewUrl} 
                            filmTitle={item.alternativeName}
                            altFilmName={item.name}
                            />
                        ))}
                    </FilmWrapper> 
                </div>     
            <SpaceLine></SpaceLine>       
        </Container>
    )
}