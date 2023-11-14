import { styled } from "styled-components";

export const NewsContainer = styled.div`

`;
export const Newswrapper = styled.div`
    margin: 0px auto;
    max-width: 1170px;
    background: #232323FF;
    border-radius: 10px;
`;

export const NewsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    color: #FFFFFF;
    font-size: 26px;
    font-weight: 600;
    padding:20px;
    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 20px;
        max-width: 300px;
    }
`;