import { NavLink } from "react-router-dom";
import styled from "styled-components";

import imgBack from "./img/headerBack.jpg";

export interface HeaderProps {
    isscrolled:string,
  }
type displayviewType = {
    displayview:string,
}
type linkthemeType = {
    linktheme?:string,
}

export const HeaderContainer = styled.div`
    width:100%;
    height: 700px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${imgBack});
`;
export const HeaderShadow = styled.div`
    width: 100%;
    height: 100%;
    background:rgba(0,  0,0, 0.55);
`;

export const HeaderMain = styled.div<HeaderProps>`
    width: 100%;
    z-index: 1;
    padding: 5px;
    background: ${({ isscrolled })=> isscrolled === 'true' ? '#000000A9':'none'};
    position: fixed;
    transition: 0.3s ease-in-out;
    display: flex;
    @media (max-width:600px) {
    flex-direction: column;
    transition: 0.3s ease-in-out;
    }
`;
export const HeaderMainLeft = styled.ul`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:1500px) {
        width: 60%;
    }
    @media (max-width:600px) { 
    width: 100%;
    margin: 0;
    }
`;
export const HeaderMainList = styled.li`
    display: flex;
    align-items: center;
    color:#FFFFFF;
    font-size: 20px;
    list-style-type: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        color:#E7CA6F;
        transition: 0.3s ease-in-out;
    }
`;
export const MainLogo = styled.img`
    margin-left: 150px;
    width: 250px;
    height: 80px;
    @media (max-width:1500px) {
        margin-left: 100px;
        transition: 0.3s ease-in-out;
    }
    @media (max-width:1300px) {
        margin-left: 30px;
        transition: 0.3s ease-in-out;
    }
    @media (max-width:1100px) {
        margin-left: 0px;
        transition: 0.3s ease-in-out;
    }
`;
export const HeaderMainRight = styled.ul`
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: right;
    @media (max-width:1500px) {
        width: 30%;
    }
    @media (max-width:600px) {        
    justify-content: left;
    transition: 0.3s ease-in-out;
    width: 100%;
    margin: 0;
    }
`;

export const HeaderLoginClick = styled.button`
    width: 100px;
    height: 40px;
    color: #FFFFFF;
    font-size: 18px;
    background-color: #FF3131;
    border: none;
    border-radius: 5px;
    margin-right: 50px;
    transition: 0.3s ease-in-out;
    &:hover{
        background-color: #D02828;
        transition: 0.3s ease-in-out;
    }
    &:active{
        background-color: #850000;
        transition: 0.3s ease-in-out;
    }
    @media (max-width:1500px) {
        margin-right: 20px;
    }
`;
export const HeaderTitleblock = styled.div`
    display: block;
    height: 100%;
    max-width:600px;
    margin: 0 auto;
`;
export const HeaderTitle = styled.h1`
    text-align: center;
    margin: 0 auto;
    padding-top: 350px;
    color:#FFFFFF;
    font-size:40px;
    font-weight: 800;
`;

export const StyledNavLink = styled(NavLink)<displayviewType>`
    display:${({ displayview }) => displayview === 'true' ? 'none' : 'block'};
    color:#FFFFFF;
    font-size: 20px;
    list-style-type: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    &:hover{
        color:#E7CA6F;
        transition: 0.3s ease-in-out;
    }
    &:active{
        color:#685B32;
    }
`;

export const StyledBurgerNavLink = styled(NavLink)<linkthemeType>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 30px;
    margin:20px 0;
    color:${({ linktheme }) => linktheme };
    font-size: 20px;
    list-style-type: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    padding-bottom: 10px;
    border-bottom: ${({ linktheme })=>linktheme} 1px solid;
    &:hover{
        color:#E7CA6F;
        transition: 0.3s ease-in-out;
    }
    &:active{
        color:#685B32;
    }
`;
