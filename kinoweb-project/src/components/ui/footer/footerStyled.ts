import styled from "styled-components";

export const FooterContainer = styled.div`
    width:100%;
    background-color:#000000;
`;

export const FooterWrapper = styled.div`
    max-width:800px;
    padding:15px;    
    margin:0 auto;
`;

export const FooterDiscription = styled.p`
    color:#CACACA;
    font-size:16px;
    text-align:center;
`;

export const FooterDopInfoList = styled.ul`
    display:flex;
    max-width:500px;
    flex-wrap:wrap;
    margin:0 auto;
    align-items:center;
    justify-content:space-between;
`;

export const FooterDopInfoValue = styled.li`
    color:#F3F3F3;
    text-align:center;
    font-size:18px;
    list-style-type:none;
    cursor: pointer;
    transition: 0.3s ease-out;
    &:hover{
        color: #E7CA6F;
        transition: 0.3s ease-in-out;
    }
`;

export const FooterSocial = styled.ul`
    display:flex;
    max-width:300px;
    flex-wrap:wrap;
    margin:30px auto;
    align-items:center;
    justify-content:space-between;
`;
export const SocialList = styled.li`
    
`;
export const SocialIcons = styled.img`
    width: 30px;
    height: 30px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
        scale: 1.1;
        transition: 0.3s ease-in-out;
    }
`;
