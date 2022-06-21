import React from 'react';
import { Box, Grid, Typography, Divider, Button, IconButton, createTheme, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { removeProductFromCart, decreaseProductQuantity, increaseProductQuantity } from "../../features/cart/cartSlice";
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from './Countries';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";

const style = {
    '&.MuiDivider-root': {
        width: '50px',
        // py: '40px'
    },
    '&.MuiButton-root': {
        border: '1px solid #d23f57',
        // borderRadius: '50%',
        maxWidth: "30px",
        maxHeight: "30px",
        minWidth: "26px",
        minHeight: "26px",
    },
    '&.MuiButton-outlined': {
        color: '#d23f57',
        textTransform: 'none',
        border: '1px solid #d33f56',
        fontSize: '0.9rem',
        // fontWeight: 600
        '&:hover': {
            border: '1px solid #d33f56',
        }
    },
    '&.Mui-disabled': {
        color: '#bdbdbd',
        border: '1px solid #bdbdbd'
    },
}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const cartProductNumber = useSelector(state => state.cart.cartTotalQuantity)
    const dispatch = useDispatch()

    const handlerRemoveProduct = (index) => {
        dispatch(removeProductFromCart({ id: index }))
    }
    const handleIncreaseProductQuantity = (index) => {
        dispatch(increaseProductQuantity({ id: index }))
    }
    const handleDecreaseProductQnt = (index) => {
        dispatch(decreaseProductQuantity({ id: index }))
    }

    const [state, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };

    return (
        <Box
            component="div" sx={{
                width: '100%',
                mt: '65px',
                position: 'relative',
            }}
        >
            <Box display='flex' justifyContent={{ xs: 'center', md: 'left' }} alignItems='center' my={4} ml={{ sm: 0, md: 10 }} flexWrap='wrap'
                sx={{
                    '& .MuiTypography-div': {
                        cursor: 'pointer'
                    }
                }}
            >
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
                {/* <Divider sx={{ ...style }} /> */}
                <Box sx={{ width: '50px', height: '4px', backgroundColor: '#fce9ec' }}></Box>
                <Link to='/checkout/' style={{ textDecoration: 'none' }}>
                    <Typography component='p' variant='div'
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
                        2. Details
                    </Typography>
                </Link>
                {/* <Divider sx={{ ...style }} /> */}
                <Box sx={{ width: '50px', height: '4px', backgroundColor: '#fce9ec' }}></Box>
                <Link to='/payment/' style={{ textDecoration: 'none' }}>
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
                </Link>
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
            <Box>
                <Grid container rowSpacing={{ md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent="center">
                    <Grid item xs={7} sm={7.5} md={7.5}>
                        {
                            cart.cartItems.length !== 0 ?
                                cart.cartItems.map((item, index) => (
                                    <Box key={index} boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' display='flex' flexDirection={{ xs: 'column', sm: 'row' }} backgroundColor='white' mb={2}>
                                        <Box >
                                            <Box display={{ xs: 'flex', sm: 'none' }} m={1} justifyContent='end'>
                                                <Box sx={{ flexGrow: 1 }} />
                                                <IconButton onClick={() => handlerRemoveProduct(item.id)}>
                                                    <ClearIcon fontSize='small' />
                                                </IconButton>
                                            </Box>
                                            <Box>
                                                <Typography key={index}
                                                    sx={{
                                                        // m: 1,
                                                        '& img': {
                                                            [theme.breakpoints.down('sm')]: {
                                                                width: '100%',
                                                                height: '100%'
                                                            },
                                                            width: '130px',
                                                            height: '130px'
                                                        }
                                                    }}
                                                >
                                                    <img src={item.productImg} alt="" />
                                                </Typography>
                                            </Box>

                                            {/* } */}
                                        </Box>
                                        <Box display='flex' justifyContent='center' alignItem='center' flexDirection='column' ml={3}>
                                            <Box sx={{ fontSize: '15px' }}>
                                                <Typography component='p' variant='div' sx={{ fontWeight: 600 }}>
                                                    {item.productName}
                                                </Typography>
                                                <Box display='flex' my={2} >
                                                    <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)' }}>
                                                        {`$` + item.price + ` x ` + item.cartQuantity}
                                                    </Typography>
                                                    <Typography component='p' variant='div' ml={2} sx={{ color: '#d24157', fontWeight: 600 }}>
                                                        {`$` + (item.price * item.cartQuantity).toFixed(2)}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box display='flex' justifyContent='left' alignItems='center' textAlign="left" mb={{ xs: 2, sm: 0 }}>
                                                <Button variant='outlined' size="small" sx={style}
                                                    onClick={() => { handleDecreaseProductQnt(item.id) }}
                                                    disabled={item.cartQuantity === 1 ? true : false}
                                                >
                                                    <RemoveOutlinedIcon fontSize='small' />
                                                </Button>
                                                <Box textAlign="center" sx={{ mx: 1 }}>
                                                    <Typography variant="div">{item.cartQuantity}</Typography>
                                                </Box>
                                                <Button variant='outlined' size="small" sx={style}
                                                    onClick={() => handleIncreaseProductQuantity(item.id)}
                                                >
                                                    <AddIcon fontSize='small' />
                                                </Button>
                                            </Box>
                                        </Box>
                                        <Box sx={{ flexGrow: 1 }} />
                                        <Box display={{ xs: 'none', sm: 'inline-block' }} m={1}>
                                            <IconButton onClick={() => handlerRemoveProduct(item.id)}>
                                                <ClearIcon fontSize='small' />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                ))
                                :
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' position='relative' top={{ xs: 0, sm: 100 }} mb={5}>
                                    <Typography variant="div">
                                        <img src="https://bazar-react.vercel.app/assets/images/logos/shopping-bag.svg" alt="shopping bag" />
                                    </Typography>
                                    <Typography variant="p" noWrap={false} textAlign='center' sx={{ color: '#9199aa', mt: 2 }}>
                                        Your shopping bag is empty.
                                    </Typography>
                                    <Link to='/' style={{ textDecoration: 'none', color: '#9199aa' }}>
                                        <Typography sx={{ fontWeight: 600, mt: 1 }}>
                                            Start shopping
                                        </Typography>
                                    </Link>
                                </Box>
                        }
                    </Grid>
                    <Grid item xs={7} sm={7.5} md={4} >
                        <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={2} mb={4}>
                            <Box display='flex' mb={2}>
                                <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '15px' }}>Total:</Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography component='p' variant='div' fontWeight={600}>${cart.cartTotalAmount.toFixed(2)}</Typography>
                            </Box>
                            <Divider />
                            <Box my={2}>
                                <Box >
                                    <Typography component='span' variant='div' mb={2}
                                        sx={{ fontSize: '15px', fontWeight: 600, color: 'rgb(43, 52, 69)' }}
                                    >
                                        Additional Comments
                                    </Typography>
                                    <Typography component='span' variant='div'
                                        sx={{
                                            backgroundColor: 'rgb(252, 233, 236)',
                                            color: 'rgb(210, 63, 87)',
                                            fontSize: '12px',
                                            py: .75, px: 1.25,
                                            borderRadius: '6px',
                                            ml: 1
                                        }}
                                    >
                                        Note
                                    </Typography>
                                </Box>
                                <TextField
                                    id="outlined-multiline-static"
                                    // label="Multiline"
                                    color='error'
                                    multiline
                                    rows={4}
                                    // defaultValue="Default Value"
                                    sx={{ width: '100%', my: 2 }}
                                />
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
                            <Divider />
                            <Box my={3}>
                                <Typography component='span' variant='div' mb={2}
                                    sx={{ fontSize: '15px', fontWeight: 600, color: 'rgb(43, 52, 69)' }}
                                >
                                    Shipping Estimates
                                </Typography>
                                <Box my={3}></Box>
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
                                            sx={{ width: '100%' }}
                                        />
                                    )}
                                />
                                <FormControl sx={{ my: 2, minWidth: '100%' }} size="small">
                                    <InputLabel id="demo-select-small" color='error'>State</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={state}
                                        label="State"
                                        onChange={handleChange}
                                        color='error'
                                    >
                                        <MenuItem value="">
                                            {/* <em>None</em> */}
                                        </MenuItem>
                                        <MenuItem value='Tangier'>Tangier</MenuItem>
                                        <MenuItem value='Rabat'>Rabat</MenuItem>
                                        <MenuItem value='Casa'>Casa</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    variant='outlined'
                                    color='error'
                                    label="Zip code"
                                    size='small'
                                    placeholder='9000'
                                    sx={{ width: '100%' }}

                                />
                                <Box my={3}>
                                    <Button variant='outlined' display='block'
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
                                        Calculate Shipping
                                    </Button>
                                    <Link to='/checkout/' style={{ textDecoration: 'none' }}>
                                        <Button variant='contained' display='block'
                                            sx={{
                                                width: '100%',
                                                color: '#fff',
                                                backgroundColor: '#d33f56',
                                                textTransform: 'none',
                                                '&:hover': {
                                                    backgroundColor: '#e3364e',
                                                },
                                            }}
                                        >
                                            Checkout Now
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Cart;