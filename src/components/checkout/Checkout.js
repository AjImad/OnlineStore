import React from 'react';
import { Box, Grid, Typography, Divider, TextField, Button, Autocomplete } from '@mui/material';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { countries } from '../cart/Countries';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Checkout = () => {

    const cart = useSelector(state => state.cart);
    const cartProductNumber = useSelector(state => state.cart.cartTotalQuantity)

    const [notChecked, setChecked] = React.useState(true)

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
                <Grid container rowSpacing={{ xs: 1, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent="center">
                    <Grid item xs={7} sm={7.5} md={7.5} order={{ xs: 2, md: 1 }}>
                        <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={2} mb={4}>
                            <Box my={2}>
                                <Typography component='span' variant='div'
                                    sx={{ fontSize: '15px', fontWeight: 600, color: 'rgb(43, 52, 69)' }}
                                >
                                    Shipping Address
                                </Typography>
                            </Box>
                            <Box>
                                <Grid container rowSpacing={{ xs: 3, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent='left'>
                                    <Grid item sm={4} md={6} >
                                        <TextField
                                            id="filled-search"
                                            label="Full Name"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Phone Number"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Zip Code"
                                            type="number"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Address 1"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                    </Grid>
                                    <Grid item sm={4} md={6} >
                                        <TextField
                                            id="filled-search"
                                            label="Email Address"
                                            type="email"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Company"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <Autocomplete
                                            id="country-select-demo"
                                            // sx={{ width: 300 }}
                                            options={countries}
                                            autoHighlight
                                            getOptionLabel={(option) => option.label}
                                            renderOption={(props, option) => (
                                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                    <img
                                                        loading="lazy"
                                                        width="20"
                                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                        alt=""
                                                    />
                                                    {option.label} ({option.code}) +{option.phone}
                                                </Box>
                                            )}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Country"
                                                    size='small'
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                                    }}
                                                    color='error'
                                                    sx={{ width: '100%', mb: 2 }}
                                                />
                                            )}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Address 2"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={2} mb={4}>
                            <Box my={2}>
                                <Typography component='span' variant='div'
                                    sx={{ fontSize: '15px', fontWeight: 600, color: 'rgb(43, 52, 69)' }}
                                >
                                    Billing Address
                                </Typography>
                                <Box mt={2}></Box>
                                <FormGroup >
                                    <FormControlLabel control={<Checkbox onClick={() => setChecked(!notChecked)} />} label="Same as shipping address" />
                                </FormGroup>
                            </Box>
                            <Box display={notChecked ? 'block' : 'none'}>
                                <Grid container rowSpacing={{ xs: 3, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent='left'>
                                    <Grid item sm={4} md={6} >
                                        <TextField
                                            id="filled-search"
                                            label="Full Name"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Phone Number"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Zip Code"
                                            type="number"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Address 1"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                    </Grid>
                                    <Grid item sm={4} md={6} >
                                        <TextField
                                            id="filled-search"
                                            label="Email Address"
                                            type="email"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Company"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                        <Autocomplete
                                            id="country-select-demo"
                                            // sx={{ width: 300 }}
                                            options={countries}
                                            autoHighlight
                                            getOptionLabel={(option) => option.label}
                                            renderOption={(props, option) => (
                                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                    <img
                                                        loading="lazy"
                                                        width="20"
                                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                        alt=""
                                                    />
                                                    {option.label} ({option.code}) +{option.phone}
                                                </Box>
                                            )}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Country"
                                                    size='small'
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                                    }}
                                                    color='error'
                                                    sx={{ width: '100%', mb: 2 }}
                                                />
                                            )}
                                        />
                                        <TextField
                                            id="filled-search"
                                            label="Address 2"
                                            type="text"
                                            variant="outlined"
                                            color='error'
                                            size='small'
                                            sx={{ width: '100%', mb: 2 }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box my={2}>
                            <Grid container rowSpacing={{ md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent='left'>
                                <Grid item xs={8} sm={4} md={6} >
                                    <Button variant="outlined"
                                        sx={{
                                            width: '100%',
                                            color: '#d23f57',
                                            border: '1px solid #d33f56',
                                            textTransform: 'none',
                                            '&:hover': {
                                                border: '1px solid #d33f56'
                                            },
                                            mb: 2
                                        }}
                                    >
                                        Back To Cart
                                    </Button>
                                </Grid>
                                <Grid item xs={8} sm={4} md={6} >
                                    <Button variant="outlined"
                                        sx={{
                                            width: '100%',
                                            color: '#fff',
                                            backgroundColor: '#d23f57',
                                            border: '1px solid #d33f56',
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: '#d23f57',
                                                border: '1px solid #d33f56',
                                            },
                                            mb: 2
                                        }}
                                    >
                                        Proceed To Payment
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={7} sm={7.5} md={4} order={{ xs: 1, md: 2 }}>
                        <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={2} mb={4}>
                            <Box >
                                <Box display='flex' mb={2}>
                                    <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '15px' }}>Total:</Typography>
                                    <Box sx={{ flexGrow: 1 }} />
                                    <Typography component='p' variant='div' fontWeight={600}>${cart.cartTotalAmount.toFixed(2)}</Typography>
                                </Box>
                                <Box display='flex' mb={2}>
                                    <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '15px' }}>Shipping</Typography>
                                    <Box sx={{ flexGrow: 1 }} />
                                    <Typography component='p' variant='div' fontWeight={600}>$10</Typography>
                                </Box>
                                <Box display='flex' mb={2}>
                                    <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '15px' }}>Tax</Typography>
                                    <Box sx={{ flexGrow: 1 }} />
                                    <Typography component='p' variant='div' fontWeight={700}>-</Typography>
                                </Box>
                                <Box display='flex' mb={2}>
                                    <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '15px' }}>Discount</Typography>
                                    <Box sx={{ flexGrow: 1 }} />
                                    <Typography component='p' variant='div' fontWeight={700}>-</Typography>
                                </Box>
                            </Box>
                            <Divider />
                            <Box display='flex' justifyContent='end' my={2}>
                                <Typography component='p' variant='div' sx={{ fontSize: '22px', fontWeight: 600 }}>${(cart.cartTotalAmount + 10).toFixed(2)}</Typography>
                            </Box>
                            <Box>
                                <TextField
                                    id="filled-search"
                                    label="Voucher"
                                    type="search"
                                    variant="outlined"
                                    placeholder='Voucher'
                                    color='error'
                                    size='small'
                                    sx={{ width: '100%', my: 2 }}
                                />
                                <Button variant="outlined"
                                    sx={{
                                        width: '100%',
                                        color: '#d23f57',
                                        border: '1px solid #d33f56',
                                        textTransform: 'none',
                                        '&:hover': {
                                            border: '1px solid #d33f56'
                                        },
                                        mb: 2
                                    }}
                                >
                                    Apply Voucher
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                {/* <Box display='flex' my={3} p={2} mb={4}>
                    <Grid container rowSpacing={{ md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent='left'>
                        <Grid item sm={4} md={5.5}>
                            <Button variant="outlined"
                                sx={{
                                    width: '100%',
                                    color: '#d23f57',
                                    border: '1px solid #d33f56',
                                    textTransform: 'none',
                                    '&:hover': {
                                        border: '1px solid #d33f56'
                                    },
                                    mb: 2
                                }}
                            >
                                Apply Voucher
                            </Button>
                        </Grid>
                        <Grid item sm={4} md={5.5}>
                            <Button variant="outlined"
                                sx={{
                                    width: '100%',
                                    color: '#d23f57',
                                    border: '1px solid #d33f56',
                                    textTransform: 'none',
                                    '&:hover': {
                                        border: '1px solid #d33f56'
                                    },
                                    mb: 2
                                }}
                            >
                                Apply Voucher
                            </Button>
                        </Grid>
                    </Grid>
                </Box> */}
            </Box>

        </Box>
    );
}

export default Checkout;