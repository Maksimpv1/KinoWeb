import { useEffect, useState } from "react";

import { headData } from "../headerData";
import { StyledNavLink } from "../headerStyled";

export const BurgerMenu = () => {
    const [burgerState, setBurgerState] = useState<boolean>(false);
    const [burgerView, setBurgerView] = useState<boolean>(false)

    useEffect(()=>{
        const handleSize = () => {
            const widthWindows = window.innerWidth;
            console.log(widthWindows)
            if(widthWindows < 1000){
                setBurgerState(true)
                console.log(burgerState)
            }else{
                setBurgerState(false)
                console.log(burgerState)
            }  
        }
        window.addEventListener('resize', handleSize); 

        return () => {
          window.removeEventListener('resize', handleSize);
        };
    })
    const handleMenuToggle = () => {
        setBurgerView(!burgerView);
      };
    return(
        <div>
            {burgerState && (<button onClick={handleMenuToggle}>Burger Menu</button>)}
        {burgerView && (
          <div>
            {(headData.map((item)=>(
              <StyledNavLink key={item.id} to={item.link}>{item.title}</StyledNavLink>
            )))}   
          </div>
        )}
      </div>
    )
}