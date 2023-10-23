import { useContext } from "react";

import { ThemeContext } from "../../providers/themeProvider";

import { ImgData, InfoData } from "./footerData";
import { FooterContainer, FooterDiscription, FooterDopInfoList, FooterDopInfoValue, FooterSocial, FooterWrapper, SocialIcons, SocialList } from "./footerStyled";

export const Footer = () => {
  const themes = useContext(ThemeContext);

  return (
    <FooterContainer colorBg = {themes.BACKGROUND_THEME}>
      <FooterWrapper>
        <FooterDopInfoList>
            {InfoData.map((item)=>(
                <FooterDopInfoValue key={item.id}  colorText={themes.TEXT_THEME}>{item.name}</FooterDopInfoValue> 
            ))}                    
        </FooterDopInfoList>
        <FooterSocial>
          {ImgData.map((item)=>(
            <SocialList key={item.id}>
              <SocialIcons src={item.source}></SocialIcons>
            </SocialList>
          ))}
        </FooterSocial>
        <FooterDiscription colorText={themes.TEXT_THEME}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quod porro incidunt nam fugit quos! Minus deleniti distinctio sapiente temporibus a!
        </FooterDiscription>
      </FooterWrapper>      
    </FooterContainer>
  );
};
