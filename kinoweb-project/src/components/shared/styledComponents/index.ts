import styled from "styled-components";

import { ThemeProps } from "../../ui/footer/footerStyled";


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