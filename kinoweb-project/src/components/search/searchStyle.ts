import { styled } from "styled-components";

export const SearchContainer = styled.div`
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const SearchInput = styled.input`
    background-color: #232323FF;
    border-radius: 10px;
    height: 50px;
    width: 250px;
    border: none;
    color: #FFFFFF;
    font-size: 30px;
    padding: 10px 15px 10px 20px;
    margin: 10px;
    ::placeholder{
        color: #C7C7C7FF;
    }
`;

export const SearchBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100px;
    border-radius: 10px;
    border: none;
    color: #FFFFFF;
    font-size: 30px;
    padding: 10px 15px 10px 20px;
    background-color: #FF3131FF;
    transition: 0.3s ease-in-out;
    &:hover{
        background-color: #AF2222FF;
        transition: 0.3s ease-in-out;
    }
    &:active{
        background-color:#5F1212FF;
    }
`;