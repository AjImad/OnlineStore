import React from 'react';
import { Box, Grid, Typography, Divider, Button, IconButton, createTheme, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { removeProductFromCart, decreaseProductQuantity, increaseProductQuantity } from "../../features/cart/cartSlice";
import ClearIcon from '@mui/icons-material/Clear';

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

    return (
        <Box
            component="div" sx={{
                width: '100%',
                // height: 'calc(100vh - 62px)',
                // height: '80vh',
                mt: '65px',
                position: 'relative',
                // border: '1px solid'
            }}
        >
            <Box display='flex' justifyContent={{ xs: 'center', md: 'left' }} alignItems='center' my={4} ml={{ sm: 0, md: 10 }} flexWrap='wrap'
                sx={{
                    '& .MuiTypography-div': {
                        // backgroundColor: false ? 'rgb(210, 63, 87)' : '#fce9ec',
                        // color: '#d34757',
                        // px: 3.5,
                        // py: .75,
                        // borderRadius: '10px',
                        // fontSize: '14px',
                        // fontWeight: 600
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
                <Typography component='p' variant='div'
                    sx={{
                        backgroundColor: false ? 'rgb(210, 63, 87)' : '#fce9ec',
                        color: '#d34757',
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
                        fontWeight: 600
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
            <Box>
                <Grid container rowSpacing={{ md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent="center">
                    <Grid item xs={7} sm={7.5} md={7.5} >
                        {
                            cart.cartItems.length !== 0 ?
                                cart.cartItems.map((item, index) => (
                                    <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' display='flex' flexDirection={{ xs: 'column', sm: 'row' }} backgroundColor='white' mb={2}>
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
                                <Box>Nothing in the your cart</Box>
                        }
                    </Grid>
                    <Grid item xs={7} sm={7.5} md={4} >
                        <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={2} mb={4}>
                            <Box display='flex' mb={2}>
                                <Typography component='p' variant='div' sx={{ color: 'rgb(125, 135, 156)', fontSize: '15px' }}>Total:</Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography component='p' variant='div' fontWeight={600}>$0.00</Typography>
                            </Box>
                            <Divider />
                            <Box my={2}>
                                <Box >
                                    <Typography component='span' variant='div' mb={2}
                                        sx={{ fontSize: '15px', fontWeight: 600 }}
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
                                hello
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Cart;