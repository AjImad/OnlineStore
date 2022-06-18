import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { auth, logout } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import ShoppingCart from '../product/ShoppingCart';
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
  color: '#a8aebc',
  border: '1px solid #a8aebc',
  borderRadius: '15px',
  '&:hover': {
    border: '1px solid #d24159'
  },
  '&:focus': {
    // '& .MuiInputBase-input': {
    border: '2px solid #d24159',
    // },
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '50ch',
    [theme.breakpoints.down('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header(props) {

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const userName = useSelector(state => state.user.name);
  // console.log(userName)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    // if(user) navigate("/home")
    if (user) navigate("/")
    else navigate('/')
  }, [user])


  const style = {
    Logo: {
      color: '#274870',
      fontWeight: 600,
      fontFamily: 'Segoe UI'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
  }

  return (
    <Box sx={{ flexGrow: 1, position: 'relative', display: { sm: 'none', md: 'inline-block' } }}>
      <AppBar position="fixed" color="default">
        <Toolbar
          sx={{ ...style.toolbar }}
        >
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
          >
            <Link to='/'><img src='https://bazar-react.vercel.app/assets/images/logo2.svg' alt='' /></Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#838da1' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for…"
              inputProps={{ 'aria-label': 'search' }}
              autoFocus
            />
          </Search>
          {/* <Box sx={{ flexGrow: 1, border: '1px solid black' }} /> */}

          {
            !user ?
              <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  //   aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={() => props.openModal()}
                  sx={{ backgroundColor: '#eee' }}
                >
                  <AccountCircleOutlinedIcon sx={{ color: '#7b7c7e' }} />
                </IconButton>
                {/* <IconButton size="large" sx={{backgroundColor: '#eee', ml: 2}}>
                  <Badge badgeContent={4} color="error" spacing={4}>
                    <ShoppingBagOutlinedIcon sx={{color: '#7b7c7e'}} />
                  </Badge>
                </IconButton> */}
                <ShoppingCart />
              </Box>
              :
              <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  //   aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{ backgroundColor: '#eee' }}
                >
                  <AccountCircleOutlinedIcon sx={{ color: '#7b7c7e' }} />
                </IconButton>
                <ShoppingCart />
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMenu}
                  onClose={handleCloseMenu}
                  onClick={handleCloseMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem>
                    <Avatar /> {userName}
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={logout}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
