import { styled } from "styled-components";

export const FilmWrapper = styled.div`
    max-width: 1170px;
    background-color: #232323FF;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    margin: 30px  auto;    
    gap:30px;
    justify-content: center;
`;

export const CardWrapper = styled.div`
    max-width: 250px;
    background-color: #F8FFE1FF ;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:0 0 30px 0;
    border: 3px solid grey;
    @media(max-width:600px){
        max-width:200px;
    }
`;



export const PreviewImg = styled.img`
    width:200px;
    height: 300px;
    border: gray 2px solid;
    border-radius:10px;
    transition: 0.3s ease-in-out;
    &:hover{
        scale: 1.05;
        transition: 0.3s ease-in-out;
    }
`;

export const PreviewTitle = styled.h3`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#232323FF;
    width: 200px;
    font-size:16px;
    height: 50px;
    border: grey 1px solid;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    background-color: #FBFFEDFF;
`;

export const PreviewBtnsWrappper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    width:96%;
    margin: 0;
`;

export const PreviewIconWrap = styled.div`
    width:30px;
    height: 30px;
    background-color: #FBFFEDFF;
    border-radius: 5px;
    border: grey 1px solid;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background-color: #F1FFC4FF;
        transition: 0.2s ease-in-out;
    }
    &:active{
        background-color: #CFFF32FF ;
    }
`;


export const PreviewButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background:none;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    border: grey 1px solid;
    padding: 5px;
    cursor: pointer;
    &:hover{
        background-color: #F1FFC4FF;
        transition: 0.2s ease-in-out;
    }
    &:active{
        background-color: #CFFF32FF ;
    }
`;