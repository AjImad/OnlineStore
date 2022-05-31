import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { AppBar, Badge, IconButton, styled, Toolbar, Typography, alpha } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ShoppingCart from '../product/ShoppingCart';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
        width: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '80%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
    },
  }));

function BottomNavbar() {

  const [open, setOpen] = React.useState(true);
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

    <Box sx={{ flexGrow: 1, width: '100%', display: {md: 'none', sm: 'inline-block'}}}>
        <AppBar  position="fixed" sx={{background: '#0f3460'}}>
            <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
            >
                <img src='/images/logoMobile.svg' alt='' height="28px" />
            </Typography>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            </Toolbar>
        </AppBar>
   

        <Box 
          sx={{
             width: '100%',
            display: {md: 'none', sm: 'inline-block'},
            position: 'fixed', left: 0, bottom: 0,
            zIndex: 1 ,
            boxShadow: '0px -1px 5px rgba(150, 150, 150, 0.75)'
            }}
        >
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
                    <ShoppingCart bottomCart={open} />
                  } />
                <NavigationAction label="Account" icon={<AccountCircleOutlinedIcon />} />
            </BottomNavigation>
        </Box>  
    </Box>
  )
}

export default BottomNavbar