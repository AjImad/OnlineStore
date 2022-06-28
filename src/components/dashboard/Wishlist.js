import React from 'react';
import { Button, Divider, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import EastIcon from '@mui/icons-material/East';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Sidebar from './Sidebar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardUi from '../Home/Card/CardUi'

const Wishlist = () => {

    // const products = useSelector(state => state.product)
    // console.log(products.value)
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

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Box my={2} mb={3} sx={{ boxSizing: 'border-box', pt: '65px' }}>
                    <Box display='flex' mb={2} px={2} pt={1}>
                        <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '13px' }}>DASHBOARD</Typography>
                    </Box>
                    <Link to='/orders/' style={{ textDecoration: 'none', color: 'black' }}>
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
                                // boxShadow: '-5px 0px 0px 0px #d23f57',
                                color: '#d23f57',
                                '& .MuiSvgIcon-root': {
                                    color: '#d23f57',
                                }
                            }}
                        >
                            <FavoriteBorderOutlinedIcon sx={{ color: 'rgb(125, 135, 156)' }} fontSize='small' />
                            <Typography component='p' variant='div' sx={{ fontSize: '15px', ml: 1 }}>Wishlist</Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Typography component='p' variant='div' fontWeight={600}>15</Typography>
                        </Box>
                    </Link>
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
            </List>
            <Divider />
            <List>
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
                                // boxShadow: '-5px 0px 0px 0px #d23f57',
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
            </List>
        </Box>
    );

    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                mt: { xs: '50px', md: '65px' }
            }}
        >
            <Grid container rowSpacing={{ xs: 1, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent="center">
                <Grid item xs={7} sm={7.5} md={3} display={{ xs: 'none', md: 'block' }}>
                    <Sidebar />
                </Grid>

                <Grid item xs={7} sm={7.5} md={8.5} >
                    <Box>
                        <Box display='flex' alignItems={{ xs: 'none', md: 'center' }} justifyContent={{ xs: 'none', md: 'space-between' }} flexDirection={{ xs: 'column', md: 'row' }} my={{ xs: 1 }} position='relative'>
                            <Box display='flex' alignItems='center'>
                                <FavoriteIcon sx={{ color: '#d23f57' }} />
                                <Typography component='p' variant='h5' ml={2} sx={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: '25px' }}>My Wish List</Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <MenuIcon fontSize='small' sx={{ cursor: 'pointer', display: { sm: 'block', md: 'none' } }} onClick={toggleDrawer("left", true)} />
                            </Box>
                            {/* Start Menu */}
                            <Button variant='contained'
                                sx={{
                                    '&.MuiButton-contained': {
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        backgroundColor: '#fce9ec',
                                        color: '#d23f57',
                                        boxShadow: 'none',
                                        my: { xs: 2, md: 0 },
                                        mt: { xs: 3, md: 0 },
                                        display: 'inline',
                                    }
                                }}
                            >
                                Add All To Cart
                            </Button>
                            {/* <MenuIcon fontSize='small' sx={{ cursor: 'pointer', display: { sm: 'block', md: 'none' } }} onClick={toggleDrawer("left", true)} /> */}
                            <Drawer
                                anchor={"left"}
                                open={state["left"]}
                                onClose={toggleDrawer("left", false)}

                                sx={{ position: 'relative', zIndex: 1 }}

                            >
                                {list("left")}
                            </Drawer>
                            {/* End Menu */}
                        </Box>

                        <Box my={4}>
                            <Grid container justifyContent={{ xs: 'center', sm: 'start' }} rowSpacing={{ xs: 3, md: 3 }} columnSpacing={{ sm: 3, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }}>
                                {/* {
                                    products.value.map((item, index) => (
                                        <Grid item xs={6} sm={4} md={4} key={item.id}>
                                            <CardUi
                                                productName={item.productName}
                                                cardImg={item.productImg}
                                                off={item.sold}
                                                price={item.price}
                                                starN={item.starNumber}
                                                starOff={5 - item.starNumber}
                                                productId={item.id}
                                            />
                                        </Grid>
                                    ))
                                } */}
                            </Grid>
                        </Box>

                        <Box display='flex' justifyContent='center' mb={5}>
                            <Stack spacing={2}
                                sx={{
                                    '& .MuiPagination-root': {
                                        '& .Mui-selected': {
                                            color: 'rgb(210, 63, 87)',
                                            backgroundColor: 'rgba(210, 63, 87, 0.12)',
                                            border: '1px solid rgba(210, 63, 87, 0.5)'
                                        }
                                    }
                                }}
                            >
                                <Pagination count={5} variant="outlined" />
                            </Stack>
                        </Box>
                    </Box>
                </Grid >
            </Grid >
        </Box >
    );
}

export default Wishlist;