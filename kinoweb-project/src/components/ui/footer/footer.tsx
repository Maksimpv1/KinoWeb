import { ImgData, InfoData } from "./footerData";
import { FooterContainer, FooterDiscription, FooterDopInfoList, FooterDopInfoValue, FooterSocial, FooterWrapper, SocialIcons, SocialList } from "./footerStyled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDopInfoList>
            {InfoData.map((item)=>(
                <FooterDopInfoValue key={item.id}>{item.name}</FooterDopInfoValue> 
            ))}                    
        </FooterDopInfoList>
        <FooterSocial>
          {ImgData.map((item)=>(
            <SocialList key={item.id}>
              <SocialIcons src={item.source}></SocialIcons>
            </SocialList>
          ))}
        </FooterSocial>
        <FooterDiscription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quod porro incidunt nam fugit quos! Minus deleniti distinctio sapiente temporibus a!
        </FooterDiscription>
      </FooterWrapper>      
    </FooterContainer>
  );
};
