import styled from "styled-components";

import { ThemeProps } from "../../ui/footer/footerStyled";

interface Ibackimage{
    backimage:string,
    backimageSmall?:boolean,
}


export const Container = styled.div<ThemeProps>`
    background-color: ${({ colorbg })=>colorbg} ;
    background-size: cover;
    width:100%;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
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
    background-size: ${({ backimageSmall }) => backimageSmall ? "100%" : "cover"};
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
export const MainTitle = styled.p`
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
