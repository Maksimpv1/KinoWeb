import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { loginStateSwitch, removeUser } from "../../../redux/reducers/authorisation";
import {  AppDispatch, useAppSelectorType } from "../../../redux/store/store";
import { ThemeContext } from "../../providers/themeProvider";

import { BurgerMenu } from "./burger/burgerMenu";
import Logo from "./img/mainlogo.png";
import { headData } from "./headerData";
import { HeaderContainer, HeaderLoginClick, HeaderMain, HeaderMainLeft, HeaderMainList, HeaderMainRight, HeaderShadow, HeaderTitle, HeaderTitleblock, MainLogo, NavLinkLogin, StyledNavLink } from "./headerStyled";


export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [age, setAge] = useState<string>('');

  const [loginText, setLoginText] = useState<string>('Login');

  const loginState = useAppSelectorType((state)=>state.auth.logState)

  useEffect(()=>{
    if(loginState === true ){
      setLoginText('Logout')
    }else{
      setLoginText('Login')
    }
  },)

  const handleLogin = () => {
    if(loginState === true){      
      dispatch(loginStateSwitch())
      dispatch(removeUser())
    }
  }

  const themeSw = useContext(ThemeContext)!;

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    themeSw.contextFunc?.(event.target.value)
  };

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(scrollY > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    const burgerWindowsWidth = useAppSelectorType((state) => state.burger.burgerShow)

  return (
    <HeaderContainer>
      <HeaderShadow>
        <HeaderMain isscrolled={isScrolled.toString()}>
          <HeaderMainLeft>
            <HeaderMainList>
              <BurgerMenu/>
              <NavLink to="/"><MainLogo src={Logo}></MainLogo></NavLink>          
            </HeaderMainList>
            {(headData.map((item)=>(
              <StyledNavLink 
              key={item.id} 
              to={item.link} 
              displayview={burgerWindowsWidth.toString()}>
                {item.title}
                </StyledNavLink>
            )))}            
          </HeaderMainLeft>
          <HeaderMainRight>
            <HeaderMainList>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label"
                    sx={{
                      color:'#FFFFFF',
                    }}>
                      Theme</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Dark"
                    onChange={handleChange}
                    sx={{
                      color:'#FFFFFF',
                    }}
                  >
                    <MenuItem value={'dark'}>Dark</MenuItem>
                    <MenuItem value={'light'}>Light</MenuItem>
                  </Select>
                </FormControl>
            </HeaderMainList>
            <HeaderMainList>
              <NavLinkLogin to="/Login"><HeaderLoginClick onClick={handleLogin}>{loginText}</HeaderLoginClick></NavLinkLogin>
            </HeaderMainList>
          </HeaderMainRight>          
        </HeaderMain>
        <HeaderTitleblock>
          <HeaderTitle>
            Movies, TV series and much more without restrictions
          </HeaderTitle>
        </HeaderTitleblock>
      </HeaderShadow>      
    </HeaderContainer>
  );
};
