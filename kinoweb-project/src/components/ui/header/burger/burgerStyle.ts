import { styled } from "styled-components";

type burgerCloseType = {
    burgerclose:string,
    bgcolor?:string,
}


export const BurgerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  margin: auto 0;
`;

export const BurgerIcon = styled.span<burgerCloseType>`
  width: 30px;  
  height: ${({ burgerclose })=> burgerclose === 'true' ? '0px' : '4px'};
  background-color: #FFFFFF;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;


  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background-color: #FFFFFF;
    transition: transform 0.3s ease;
  }

  &::before {
    top: -10px;
    transition: 0.3s ease-in-out;
    transform: ${({ burgerclose })=> burgerclose === 'true' ? 'translateY(10px) rotate(45deg)' : 'translateY(0px) rotate(0deg)'} ;
  }

  &::after {
    top: 10px;
    transition: 0.3s ease-in-out;
    transform: ${({ burgerclose })=> burgerclose === 'true'? 'translateY(-10px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)'} ;
  }

`;


export const AssaidMenu = styled.div<burgerCloseType>`
    position: fixed;
    width:100vw;
    height: 100vh;
    top:120px;
    left: 0px;
    background-color: ${({ bgcolor })=> bgcolor ==="#FFFFFF" ? '#000000A9':'#FFFFFFB2'};
    z-index:1;
    transform:${({ burgerclose }) => burgerclose === 'false' ? 'translateX(-100%)' : 'translateX(0%)'};
    transition: 0.3s ease-in-out;
    @media (max-width:600px){
        top:145px;
        transition: 0.3s ease-in-out;
    }

`;

export const BlurMenu = styled.div`
    width:100vw;
    height: 100vh;
    backdrop-filter: blur(2px);
    position:absolute;
`;
