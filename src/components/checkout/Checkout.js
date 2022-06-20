import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


const Checkout = () => {

    const cart = useSelector(state => state.cart);
    const cartProductNumber = useSelector(state => state.cart.cartTotalQuantity)

    return (
        <Box component='div'
            sx={{
                width: '100%',
                mt: '65px',
                position: 'relative'
            }}
        >
            <Box display='flex' justifyContent={{ xs: 'center', md: 'left' }} alignItems='center' my={4} ml={{ sm: 0, md: 10 }} flexWrap='wrap'
                sx={{
                    '& .MuiTypography-div': {
                        cursor: 'pointer'
                    }
                }}
            >
                <Link to='/cart/' style={{ textDecoration: 'none' }}>
                    <Typography component='p' variant='div'
                        sx={{
                            // '& .MuiTypography-div': {
                            backgroundColor: 'rgb(210, 63, 87)',
                            color: 'white',
                            px: 3.5,
                            py: .75,
                            borderRadius: '10px',
                            fontSize: '14px',
                            fontWeight: 600
                            // }
                        }}
                    >
                        1. Cart
                    </Typography>
                </Link>
                {/* <Divider sx={{ ...style }} /> */}
                <Box sx={{ width: '50px', height: '4px', backgroundColor: 'rgb(210, 63, 87)' }}></Box>
                <Typography component='p' variant='div'
                    sx={{
                        backgroundColor: true ? 'rgb(210, 63, 87)' : '#fce9ec',
                        color: '#fce9ec',
                        px: 3.5,
                        py: .75,
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: 600
                    }}
                >
                    2. Details
                </Typography>
                {/* <Divider sx={{ ...style }} /> */}
                <Box sx={{ width: '50px', height: '4px', backgroundColor: '#fce9ec' }}></Box>
                <Typography component='p' variant='div' mt={{ xs: 2, sm: 0 }}
                    sx={{
                        backgroundColor: false ? 'rgb(210, 63, 87)' : '#fce9ec',
                        color: '#d34757',
                        px: 3.5,
                        py: .75,
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: 600,
                        '&.MuiTypography-div': {
                            '&:hover': {
                                backgroundColor: 'rgb(210, 63, 87)',
                                color: '#fce9ec',
                            }
                        }
                    }}
                >
                    3. Payment
                </Typography>
                {/* <Divider sx={{ ...style }} /> */}
                <Box sx={{ width: '50px', height: '4px', backgroundColor: '#fce9ec' }}></Box>
                <Typography component='p' variant='div' mt={{ xs: 2, sm: 0 }}
                    sx={{
                        backgroundColor: false ? 'rgb(210, 63, 87)' : '#fce9ec',
                        color: '#d34757',
                        px: 3.5,
                        py: .75,
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: 600,
                    }}
                >
                    4. Review
                </Typography>
            </Box>

            {/* here put your Grid  */}
            <Box>
                <Grid container rowSpacing={{ md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent="center">
                    <Grid item xs={7} sm={7.5} md={7.5}>
                        <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={2} mb={4}>
                            Grid 1

                        </Box>
                    </Grid>
                    <Grid item xs={7} sm={7.5} md={4} >
                        <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={2} mb={4}>
                            <Box display='flex' mb={2}>
                                <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '15px' }}>Total:</Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography component='p' variant='div' fontWeight={600}>${cart.cartTotalAmount.toFixed(2)}</Typography>
                            </Box>
                            <Divider />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
}

export default Checkout;