import React from 'react';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={1} mb={4} sx={{ boxSizing: 'border-box' }}>
            <Box my={2} mb={3} sx={{ boxSizing: 'border-box' }}>
                <Box display='flex' mb={2} px={2} pt={1}>
                    <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '13px' }}>DASHBOARD</Typography>
                </Box>
                <Link to='/orders/' style={{ textDecoration: 'none', color: 'black' }}>
                    <Box display='flex' alignItems='center' mb={2} px={2}
                        sx={{
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                            position: 'relative',
                            boxShadow: location.pathname === '/orders/' ? '-5px 0px 0px 0px #d23f57' : 'none',
                            color: location.pathname === '/orders/' ? '#d23f57' : 'black',
                            '& .MuiSvgIcon-root': {
                                color: location.pathname === '/orders/' ? '#d23f57' : 'rgb(125, 135, 156)',
                            },
                            '&:hover': {

                                boxShadow: '-5px 0px 0px 0px #d23f57',
                                color: location.pathname !== '/orders/' ? '#d23f57' : 'none',
                                '& .MuiSvgIcon-root': {
                                    color: location.pathname !== '/orders/' ? '#d23f57' : 'none',
                                }
                            }
                        }}
                    >
                        <ShoppingBagOutlinedIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                        <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Orders</Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Typography component='p' variant='div' fontWeight={600}>5</Typography>
                    </Box>
                </Link>
                <Link to='/wishlist/' style={{ textDecoration: 'none', color: 'black' }}>
                    <Box display='flex' alignItems='center' mb={2} px={2}
                        sx={{
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                            position: 'relative',
                            boxShadow: location.pathname === '/wishlist/' ? '-5px 0px 0px 0px #d23f57' : 'none',
                            color: location.pathname === '/wishlist/' ? '#d23f57' : 'black',
                            '& .MuiSvgIcon-root': {
                                color: location.pathname === '/wishlist/' ? '#d23f57' : 'rgb(125, 135, 156)',
                            },
                            '&:hover': {

                                boxShadow: '-5px 0px 0px 0px #d23f57',
                                color: location.pathname !== '/wishlist/' ? '#d23f57' : 'none',
                                '& .MuiSvgIcon-root': {
                                    color: location.pathname !== '/wishlist/' ? '#d23f57' : 'none',
                                }
                            }
                        }}
                    >
                        <FavoriteBorderOutlinedIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                        <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Wishlist</Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Typography component='p' variant='div' fontWeight={600}>15</Typography>
                    </Box>
                </Link>
                <Link to='/support-tickets/' style={{ textDecoration: 'none', color: 'black' }}>
                    <Box display='flex' alignItems='center' mb={2} px={2}
                        sx={{
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                            position: 'relative',
                            boxShadow: location.pathname === '/support-tickets/' ? '-5px 0px 0px 0px #d23f57' : 'none',
                            color: location.pathname === '/support-tickets/' ? '#d23f57' : 'black',
                            '& .MuiSvgIcon-root': {
                                color: location.pathname === '/support-tickets/' ? '#d23f57' : 'rgb(125, 135, 156)',
                            },
                            '&:hover': {

                                boxShadow: '-5px 0px 0px 0px #d23f57',
                                color: location.pathname !== '/support-tickets/' ? '#d23f57' : 'none',
                                '& .MuiSvgIcon-root': {
                                    color: location.pathname !== '/support-tickets/' ? '#d23f57' : 'none',
                                }
                            }
                        }}
                    >
                        <SupportAgentOutlinedIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                        <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Support Tickets</Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Typography component='p' variant='div' fontWeight={600}>1</Typography>
                    </Box>
                </Link>
            </Box>
            <Divider />
            <Box my={2} mt={3} sx={{ boxSizing: 'border-box' }}>
                <Box display='flex' mb={2} px={2} pt={1}>
                    <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '13px' }}>ACCOUNT SETTINGS</Typography>
                </Box>
                <Box display='flex' alignItems='center' mb={2} px={2}
                    sx={{
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        position: 'relative',
                        boxShadow: location.pathname === '/profile/' ? '-5px 0px 0px 0px #d23f57' : 'none',
                        color: location.pathname === '/profile/' ? '#d23f57' : 'black',
                        '& .MuiSvgIcon-root': {
                            color: location.pathname === '/profile/' ? '#d23f57' : 'rgb(125, 135, 156)',
                        },
                        '&:hover': {

                            boxShadow: '-5px 0px 0px 0px #d23f57',
                            color: location.pathname !== '/profile/' ? '#d23f57' : 'none',
                            '& .MuiSvgIcon-root': {
                                color: location.pathname !== '/profile/' ? '#d23f57' : 'none',
                            }
                        }
                    }}
                >
                    <PersonIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                    <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Profile Info</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography component='p' variant='div' fontWeight={600}>1</Typography>
                </Box>
                <Box display='flex' alignItems='center' mb={2} px={2}
                    sx={{
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        position: 'relative',
                        boxShadow: location.pathname === '/address/' ? '-5px 0px 0px 0px #d23f57' : 'none',
                        color: location.pathname === '/address/' ? '#d23f57' : 'black',
                        '& .MuiSvgIcon-root': {
                            color: location.pathname === '/address/' ? '#d23f57' : 'rgb(125, 135, 156)',
                        },
                        '&:hover': {

                            boxShadow: '-5px 0px 0px 0px #d23f57',
                            color: location.pathname !== '/address/' ? '#d23f57' : 'none',
                            '& .MuiSvgIcon-root': {
                                color: location.pathname !== '/address/' ? '#d23f57' : 'none',
                            }
                        }
                    }}
                >
                    <LocationOnIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                    <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Addresses</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography component='p' variant='div' fontWeight={600}>1</Typography>
                </Box>
                <Box display='flex' alignItems='center' mb={2} px={2}
                    sx={{
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        position: 'relative',
                        boxShadow: location.pathname === '/payment-methods/' ? '-5px 0px 0px 0px #d23f57' : 'none',
                        color: location.pathname === '/payment-methods/' ? '#d23f57' : 'black',
                        '& .MuiSvgIcon-root': {
                            color: location.pathname === '/payment-methods/' ? '#d23f57' : 'rgb(125, 135, 156)',
                        },
                        '&:hover': {

                            boxShadow: '-5px 0px 0px 0px #d23f57',
                            color: location.pathname !== '/payment-methods/' ? '#d23f57' : 'none',
                            '& .MuiSvgIcon-root': {
                                color: location.pathname !== '/payment-methods/' ? '#d23f57' : 'none',
                            }
                        }
                    }}
                >
                    <PaymentIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                    <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Payment Methods</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography component='p' variant='div' fontWeight={600}>1</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;