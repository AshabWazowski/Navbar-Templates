import React, { useState } from "react";
import { MenuItem, Select, FormControl, IconButton, InputBase, Typography, useMediaQuery } from "@mui/material";
import { FlexBox, MainBox } from "../Assets/BoxModel";
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';


const fullName = 'Your Name'

const Navbar = () => {

  const [mode , setMode] = useState(false );
  const isDesktopScreen = useMediaQuery('(min-width: 1000px)');

  return (
   <MainBox padding='1rem 6%'  boxShadow='2px 2px 10px rgba(0,0,0,0.5)'>
      <FlexBox gap='1.5rem'width='100%'>
          
          <FlexBox gap='1rem'>
            <Typography variant="h5" fontWeight='bold' fontFamily='Alkatra'>Your Logo</Typography>
            {isDesktopScreen ? 
            <FlexBox border='1.5px solid grey' borderRadius = '5px' gap='1.5rem' padding='0px 10px'>
              <InputBase placeholder="Title..."/>
              <IconButton>
                <SearchIcon/>
              </IconButton>
            </FlexBox>
            : null
            }
          </FlexBox>
      {
        isDesktopScreen ? 

        <FlexBox gap='1.5rem'>
          <IconButton onClick={()=> setMode(!mode)}>
            {
              mode ? 
              <DarkModeIcon sx={{fontSize:'25px'}}/>
              :
              <LightModeIcon sx={{fontSize:'25px'}}/>
            }
          </IconButton>

          <IconButton>
            <NotificationsIcon sx={{fontSize:'25px'}}/>
          </IconButton>

          <IconButton>
            <ShoppingCartIcon sx={{fontSize:'25px'}}/>
          </IconButton>

          <FormControl variant="standard" value={fullName}>
          <Select
              value={fullName}
              sx={{
                border:'0.7px solid grey',
                backgroundColor: '',
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: '',
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => {}} gap='10px'>
              <LogoutIcon sx={{fontSize:'18px'}}/>  Log Out</MenuItem>
            </Select>
          </FormControl>
          </FlexBox>
    :
    <IconButton>
      <MenuIcon sx={{fontSize:'25px'}}/>
    </IconButton>  
    }

      </FlexBox>
   </MainBox>
  );
};

export default Navbar;
