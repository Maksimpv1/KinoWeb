import Logo from "./img/mainlogo.png";
import { HeaderContainer, HeaderLoginClick, HeaderMain, HeaderMainLeft, HeaderMainList, HeaderMainRight, HeaderShadow, HeaderSwitchTheme, MainLogo } from "./headerStyled";


export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderShadow>
        <HeaderMain>
          <HeaderMainLeft>
            <HeaderMainList>
              <MainLogo src={Logo}></MainLogo>              
            </HeaderMainList>
            <HeaderMainList>
              Main Page             
            </HeaderMainList>
            <HeaderMainList>
              News            
            </HeaderMainList>
            <HeaderMainList>
              Search             
            </HeaderMainList>
            <HeaderMainList>
              Help            
            </HeaderMainList>
          </HeaderMainLeft>
          <HeaderMainRight>
            <HeaderMainList>
                <HeaderSwitchTheme>
                    Светлая
                </HeaderSwitchTheme>
              </HeaderMainList>
            <HeaderMainList>
              <HeaderLoginClick>Login</HeaderLoginClick>
            </HeaderMainList>
          </HeaderMainRight>          
        </HeaderMain>
      </HeaderShadow>      
    </HeaderContainer>
  );
};
