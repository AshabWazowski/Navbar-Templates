import React, { useState } from "react";
import { Avatar, Box, IconButton, InputBase, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { FlexBox, MainBox } from "../Assets/BoxModel";
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
import image from '../image/image.jpg'
import MenuIcon from '@mui/icons-material/Menu';



const fullName = 'Your Name'

const Navbar = () => {

  const [mode , setMode] = useState(false );
  const isDesktopScreen = useMediaQuery('(min-width: 1000px)');

  return (
   <MainBox padding='1rem 6%'  boxShadow='2px 2px 10px rgba(0,0,0,0.5)'>
      <FlexBox gap='1.5rem'width='100%'>
          
          {/* Logo and Search */}
          <FlexBox gap='1rem'>
            <Typography variant="h5" fontWeight='bold' fontFamily='Alkatra'>Your Logo</Typography>
            {isDesktopScreen ? 
            <FlexBox border='1.5px solid grey' borderRadius = '5px' padding='0px 10px'>
              <InputBase placeholder="Title..."/>
              <IconButton>
                <SearchIcon/>
              </IconButton>
            </FlexBox>
            : 
            null
            }
          </FlexBox>

      {/* DESKTOP VIEW */}
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
            <FlexBox gap='1rem'>
              <Typography fontWeight='bold' fontFamily='Roboto'>{fullName}</Typography>
            <Avatar src={image}/>
            </FlexBox>
          </FlexBox>
    :
    <IconButton onClick={()=>{}}>
      <MenuIcon sx={{fontSize:'25px'}}/>
    </IconButton>  
    }

      </FlexBox>
   </MainBox>
  );
};

export default Navbar;
