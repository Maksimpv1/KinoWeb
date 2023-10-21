import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

import Logo from "./img/mainlogo.png";
import { headData } from "./headerData";
import { HeaderContainer, HeaderLoginClick, HeaderMain, HeaderMainLeft, HeaderMainList, HeaderMainRight, HeaderShadow, HeaderTitle, HeaderTitleblock, MainLogo, StyledNavLink } from "./headerStyled";


export const Header = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <HeaderContainer>
      <HeaderShadow>
        <HeaderMain>
          <HeaderMainLeft>
            <HeaderMainList>
              <MainLogo src={Logo}></MainLogo>              
            </HeaderMainList>
            {(headData.map((item)=>(
              <StyledNavLink key={item.id} to={item.link}>{item.title}</StyledNavLink>
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
              <HeaderLoginClick>Login</HeaderLoginClick>
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
