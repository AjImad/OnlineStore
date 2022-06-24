import React from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';

const Orders = () => {

    const cart = useSelector(state => state.cart);

    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                mt: '65px'
            }}
        >
            <Grid container rowSpacing={{ xs: 1, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent="center">
                <Grid item xs={7} sm={7.5} md={3}>
                    <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={1} mb={4} sx={{ boxSizing: 'border-box' }}>
                        <Box my={2} mb={3} sx={{ boxSizing: 'border-box' }}>
                            <Box display='flex' mb={2} px={2} pt={1}>
                                <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '13px' }}>DASHBOARD</Typography>
                            </Box>
                            <Box display='flex' alignItems='center' mb={2} px={2}
                                sx={{
                                    cursor: 'pointer',
                                    boxSizing: 'border-box',
                                    position: 'relative',
                                    boxShadow: '-5px 0px 0px 0px #d23f57',
                                    color: '#d23f57',
                                    '& .MuiSvgIcon-root': {
                                        color: '#d23f57',
                                    }
                                }}
                            >
                                <ShoppingBagOutlinedIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                                <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Orders</Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography component='p' variant='div' fontWeight={600}>5</Typography>
                            </Box>
                            <Box display='flex' alignItems='center' mb={2} px={2}
                                sx={{
                                    cursor: 'pointer',
                                    boxSizing: 'border-box',
                                    width: '100%',
                                    position: 'relative',
                                    // boxSizing: 'content-box',
                                    // borderLeft: '4px solid #d23f57',

                                    '&:hover': {
                                        boxSizing: 'border-box',
                                        boxShadow: '-5px 0px 0px 0px #d23f57',
                                        color: '#d23f57',
                                        '& .MuiSvgIcon-root': {
                                            color: '#d23f57',
                                        }
                                    }
                                }}
                            >
                                <FavoriteBorderOutlinedIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                                <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Wishlist</Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography component='p' variant='div' fontWeight={600}>15</Typography>
                            </Box>
                            <Box display='flex' alignItems='center' mb={2} px={2}
                                sx={{
                                    cursor: 'pointer',
                                    boxSizing: 'border-box',
                                    width: '100%',
                                    position: 'relative',
                                    // boxSizing: 'content-box',
                                    // borderLeft: '4px solid #d23f57',

                                    '&:hover': {
                                        boxSizing: 'border-box',
                                        boxShadow: '-5px 0px 0px 0px #d23f57',
                                        color: '#d23f57',
                                        '& .MuiSvgIcon-root': {
                                            color: '#d23f57',
                                        }
                                    }
                                }}
                            >
                                <SupportAgentOutlinedIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                                <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Support Tickets</Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography component='p' variant='div' fontWeight={600}>1</Typography>
                            </Box>
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
                                    width: '100%',
                                    position: 'relative',
                                    // boxSizing: 'content-box',
                                    // borderLeft: '4px solid #d23f57',

                                    '&:hover': {
                                        boxSizing: 'border-box',
                                        boxShadow: '-5px 0px 0px 0px #d23f57',
                                        color: '#d23f57',
                                        '& .MuiSvgIcon-root': {
                                            color: '#d23f57',
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
                                    width: '100%',
                                    position: 'relative',
                                    // boxSizing: 'content-box',
                                    // borderLeft: '4px solid #d23f57',

                                    '&:hover': {
                                        boxShadow: '-5px 0px 0px 0px #d23f57',
                                        boxSizing: 'border-box',
                                        color: '#d23f57',
                                        '& .MuiSvgIcon-root': {
                                            color: '#d23f57',
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
                                    width: '100%',
                                    position: 'relative',
                                    // boxSizing: 'content-box',
                                    // borderLeft: '4px solid #d23f57',

                                    '&:hover': {
                                        boxSizing: 'border-box',
                                        boxShadow: '-5px 0px 0px 0px #d23f57',
                                        color: '#d23f57',
                                        '& .MuiSvgIcon-root': {
                                            color: '#d23f57',
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
                </Grid>
                <Grid item xs={7} sm={7.5} md={8} >
                    <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={2} mb={4}>
                        Orders
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Orders;