import { AccordionSummary } from "@mui/material";
import styled from "styled-components";

import { ThemeProps } from "../ui/footer/footerStyled";

export const MainContainer = styled.div<ThemeProps>`
    width:100%;
    background-color: ${(props)=> props.colorBg};
`;
export const MainWrapper = styled.div<{Accords?:boolean}>`
    max-width:1170px;
    margin: 0 auto;
    display: flex;
    flex-wrap: ${({ Accords })=> Accords ? 'nowrap': 'wrap'};
    align-items: center;
    flex-direction: ${({ Accords }) => Accords ? 'column' : 'row' };
    justify-content: center;
    padding: 30px 0;
    @media (max-width:1200px) {
        padding: ${({ Accords }) => Accords ? '30px 30px' : '30px 0'};
    }
    @media (max-width:1000px) {
        flex-direction: column;
        padding: ${({ Accords }) => Accords ? '30px 30px' : '30px 0'};
    }
`;
export const MainTitle = styled.h3<ThemeProps>`
    color:${(props)=> props.colorText};
    font-size: 30px;
    @media (max-width:1100px) {
        font-size:24px;
    }
    @media (max-width:1000px) {
        text-align:center;
    } 
    
`;

export const MainDiscription = styled.p<ThemeProps>`
    color:${(props)=> props.colorText};
    font-size:20px;
    @media (max-width:1100px) {
        font-size:18px;
    }
    @media (max-width:1000px) {
        text-align:center;
    } 
`;

export const MainFirstState = styled.div<{Orient:boolean}>`
    max-width:570px;    
    order:${({ Orient })=> Orient ? 1 : 2};
    @media (max-width:1000px) {
        order:1;
    }  
`;

export const MainSecondState = styled.div<{Orient:boolean}>`
    max-width:570px;
    order:${({ Orient })=> Orient ? 2 : 1};
    @media (max-width:1000px) {
        order:2;
    } 
`;

export const SpaceLine = styled.span`
    display: block;
    width:100%;
    background-color: #232323;
    height:10px;
`;

export const MainBlockImg = styled.img`
    width:600px;
    height:450px;
    @media (max-width:1300px) {
    width:500px;
    height:350px;
    }
    @media (max-width:1100px) {
    width:400px;
    height:300px;
    }
    @media (max-width:500px) {
    width:300px;
    height:250px;
    }
`;

export const AccordsTittle = styled(AccordionSummary)`
    &:hover{
        background-color:#414141;
    }
`;

export const AccordsTitle = styled.h2`
    color:#FFFFFF;
    font-size: 30px;
    text-align:center;
    margin:0;
    padding-top: 40px;
    @media (max-width:1100px) {
        font-size:24px;
    }
`;
