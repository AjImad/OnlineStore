import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Badge, IconButton, styled } from '@mui/material';

function BottomNavbar() {

  const [value, setValue] = React.useState(0);
  const NavigationAction = styled(BottomNavigationAction)( () => ({
    '&.MuiBottomNavigationAction-root': {
        color: "#0f3460"
      },
      '&.Mui-selected': {
        color: '#d33d55',
      }
  }));

  return (
    <Box sx={{ width: '100%', display: {sm: 'none', xs: 'inline-block'}, position: 'fixed', left: 0, bottom: 0 }}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{color: '#e2374f'}}
        >
            <NavigationAction label="Home" icon={<HomeOutlinedIcon />} />
            <NavigationAction label="Category" icon={<CategoryOutlinedIcon />}/>
            <NavigationAction label="Carrt" icon={
                <Badge badgeContent={4} color="error">
                <LocalMallOutlinedIcon />
                </Badge>
            } />
            <NavigationAction label="Account" icon={<AccountCircleOutlinedIcon />} />
        </BottomNavigation>
    </Box>  
  )
}

export default BottomNavbar