import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../../providers/themeProvider";

import { ImgData, InfoData } from "./footerData";
import { FooterContainer, FooterDiscription, FooterDopInfoList, FooterDopInfoValue, FooterSocial, FooterWrapper, SocialIcons, SocialList } from "./footerStyled";

export const Footer = () => {
  const themes = useContext(ThemeContext);

  return (
    <FooterContainer colorbg = {themes.BACKGROUND_THEME}>
      <FooterWrapper>
        <FooterDopInfoList>
            {InfoData.map((item)=>(
              <NavLink to={item.link}  key={item.id} >
                <FooterDopInfoValue colortext={themes.TEXT_THEME}>{item.name}</FooterDopInfoValue>
              </NavLink> 
            ))}                    
        </FooterDopInfoList>
        <FooterSocial>
          {ImgData.map((item)=>(
            <SocialList key={item.id}>
              <SocialIcons src={item.source}></SocialIcons>
            </SocialList>
          ))}
        </FooterSocial>
        <FooterDiscription colortext={themes.TEXT_THEME}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quod porro incidunt nam fugit quos! Minus deleniti distinctio sapiente temporibus a!
        </FooterDiscription>
      </FooterWrapper>      
    </FooterContainer>
  );
};
