import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import { ThemeProps } from "../ui/footer/footerStyled";

export const WrapperLoginForm = styled.div`
    max-width: 1170px;
    margin: 0 auto;
`;

export const LoginFormMain = styled.form`
    margin:0 auto 50px auto;
    max-width: 600px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F8FFE1FF;
    padding: 40px 15px;
    border-radius: 15px;
`;

export const TextFieldContainer = styled.div`
    display: block;
    margin-bottom: 30px ;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-weight: 600;
`;

export const FormButton = styled.button`
    background-color: #FF3131FF;
    color: #FFFFFF;
    width: 120px;
    height: 50px;
    font-size: 24px;
    border:none;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: 0.3s ease-in-out;
    &:hover{
        background-color: #ad0000;
        transition: 0.3s ease-in-out;
    }
    &:active{
        background-color: #FF3131FF;
        transition: 0.3s ease-in-out;
    }
`;

export const RegisterLink = styled(NavLink)`
    font-size: 18px;
    &:hover{
        color: red;
    }
    &:active{
        color: #8b0101;
    }
`;

export const FormTitle = styled.h2<ThemeProps>`
    color: ${({ colortext })=>colortext};
    font-size:30px;
    font-weight: 600;
    text-align: center;
`;
