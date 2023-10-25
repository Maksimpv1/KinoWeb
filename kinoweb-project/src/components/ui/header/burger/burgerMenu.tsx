import { useContext, useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";

import { changeValueBurgerHandle, changeValueBurgerShow } from "../../../../redux/reducers/burgerReduser";
import { AppDispatch, useAppSelectorType } from "../../../../redux/store/store";
import { ThemeContext } from "../../../providers/themeProvider";
import { headData } from "../headerData";
import { StyledBurgerNavLink } from "../headerStyled";

import { AssaidMenu, BlurMenu, BurgerButton, BurgerIcon } from "./burgerStyle";

export const BurgerMenu = () => {

    const themes = useContext(ThemeContext)!;

    const dispatch = useDispatch<AppDispatch>();
    const burgerWindowsWidth = useAppSelectorType((state) => state.burgerShow)
    const burgerClick = useAppSelectorType((state) => state.burgerHandle)

    useEffect(()=>{
        const handleSize = () => {
            const widthWindows = window.innerWidth;
            if(widthWindows < 1000){
                dispatch(changeValueBurgerShow({ value:true }))
            }else{
              dispatch(changeValueBurgerShow({ value:false }))
              dispatch(changeValueBurgerHandle({ value:false }))
            }  
        }
        window.addEventListener('resize', handleSize); 

        return () => {
          window.removeEventListener('resize', handleSize);
        };
    })
    useEffect(()=>{
      if(window.innerWidth < 1000){
        dispatch(changeValueBurgerShow({ value:true }))
        dispatch(changeValueBurgerHandle({ value:false }))
      }
  },[])
    const handleMenuToggle = () => {
        dispatch(changeValueBurgerHandle({ value:true }))
      };
    return(
        <div>
            {burgerWindowsWidth && (<BurgerButton onClick={handleMenuToggle}>
              <BurgerIcon burgerclose={ burgerClick.toString() } /></BurgerButton>)}
              {burgerWindowsWidth && (<AssaidMenu 
              bgcolor={themes.TEXT_THEME}
              burgerclose={ burgerClick.toString() }>        
              <BlurMenu>
              {(headData.map((item)=>(
                <StyledBurgerNavLink 
                linktheme={themes.TEXT_THEME}
                key={item.id} 
                to={item.link} 
                onClick={handleMenuToggle} >{item.title}</StyledBurgerNavLink>
              )))}
              </BlurMenu> 
            </AssaidMenu>)}
      </div>
    )
}