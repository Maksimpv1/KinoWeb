import styled from "styled-components";

import { ThemeProps } from "../../ui/footer/footerStyled";

interface Ibackimage{
    backimage:string,
}


export const Container = styled.div<ThemeProps>`
    background-color: ${({ colorbg })=>colorbg} ;
    width:100%;
    margin: 0;
    padding: 0px;
`;

export const Wrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 15px;
`;

export const BanerContainer = styled.div<Ibackimage>`
    margin: 0;
    width:100%;
    height: 700px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${({ backimage }) => backimage});
`;
export const BanerShadow = styled.div`
    width: 100%;
    height: 100%;
    background:rgba(0,  0,0, 0.55);
`;

export const MainTitleblock = styled.h3`
    display: flex;
    align-items: center;
    color: #FFFFFF;
    justify-content: center;
    text-align: center;
    font-size: 36px;
    font-weight: 800;
    height: 100%;
    max-width:600px;
    margin: 0 auto;

`;
export const MainTitle = styled.h1`
    text-align: center;
    margin: 0 auto;
    padding-top: 150px;
    color:#FFFFFF;
    font-size:40px;
    font-weight: 800;
    @media ( max-width:800px ){
        font-size:30px;
        padding-top: 120px;
    }
`;
