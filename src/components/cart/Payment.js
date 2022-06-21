import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Button, Divider, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useRadioGroup } from '@mui/material/RadioGroup';


const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '&.MuiFormControlLabel-root': {
            // color: theme.palette.primary.main,
            color: '#2B3445',
            fontSize: '15px',
            // fontWeight: 600
            '& .Mui-checked': {
                color: '#e3364e'
            }
        },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
    value: PropTypes.any,
};

const Payment = () => {

    const cart = useSelector(state => state.cart);
    const [radioOrder, setRadioOrder] = React.useState(1);

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
                <Link to='/checkout/' style={{ textDecoration: 'none' }}>
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
                </Link>
                {/* <Divider sx={{ ...style }} /> */}
                <Box sx={{ width: '50px', height: '4px', backgroundColor: 'rgb(210, 63, 87)' }}></Box>
                <Typography component='p' variant='div' mt={{ xs: 2, sm: 0 }}
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

            {/* Here put Grid */}
            <Box>
                <Grid container rowSpacing={{ xs: 1, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent="center">
                    <Grid item xs={7} sm={7.5} md={7.5} order={{ xs: 2, md: 1 }}>
                        <Box boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' borderRadius='8px' backgroundColor='white' p={2} mb={4}>
                            <RadioGroup name="use-radio-group" defaultValue='first'>
                                <Box display='flex' flexDirection='column' my={2}>
                                    <Box mb={1}>
                                        <MyFormControlLabel onClick={() => setRadioOrder(1)} value="first" label="Pay with credit cart" control={<Radio />} />
                                        <Box mt={2} display={radioOrder === 1 ? 'block' : 'none'}>
                                            <Grid container rowSpacing={{ xs: 1, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent='left'>
                                                <Grid item sm={4} md={6} >
                                                    <TextField
                                                        id="filled-search"
                                                        label="Card Number"
                                                        type="text"
                                                        variant="outlined"
                                                        color='error'
                                                        size='small'
                                                        required
                                                        sx={{ width: '100%', mb: 2 }}
                                                    />
                                                    <TextField
                                                        id="filled-search"
                                                        label="Name on Card"
                                                        type="text"
                                                        variant="outlined"
                                                        color='error'
                                                        size='small'
                                                        required
                                                        sx={{ width: '100%', mb: 2 }}
                                                    />

                                                </Grid>
                                                <Grid item sm={4} md={6} >
                                                    <TextField
                                                        id="filled-search"
                                                        label="Exp Date"
                                                        type="text"
                                                        variant="outlined"
                                                        placeholder='MM/YY'
                                                        color='error'
                                                        size='small'
                                                        required
                                                        sx={{ width: '100%', mb: 2 }}
                                                    />
                                                    <TextField
                                                        id="filled-search"
                                                        label="Name on Card"
                                                        type="text"
                                                        variant="outlined"
                                                        color='error'
                                                        size='small'
                                                        required
                                                        sx={{ width: '100%', mb: 2 }}
                                                    />
                                                </Grid>

                                            </Grid>
                                            <Button variant='outlined'
                                                sx={{
                                                    color: '#d23f57',
                                                    border: '1px solid #d23f57',
                                                    textTransform: 'none',
                                                    '&:hover': {
                                                        color: '#d23f57',
                                                        border: '1px solid #d23f57',
                                                    },
                                                    mb: 2
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Box>
                                    </Box>
                                    <Divider />
                                    <Box my={2}>
                                        <MyFormControlLabel onClick={() => setRadioOrder(2)} value="second" label="Pay with Paypal" control={<Radio />} />
                                        <Box display={radioOrder === 2 ? 'flex' : 'none'} mt={2}>
                                            <TextField
                                                id="filled-search"
                                                label="Paypal Email"
                                                type="email"
                                                variant="outlined"
                                                color='error'
                                                size='small'
                                                required
                                                sx={{ width: { sm: '82%', md: '85%' }, mb: 2 }}
                                            />
                                            <Box sx={{ flexGrow: 1 }} />
                                            <Button variant='outlined'
                                                sx={{
                                                    color: '#d23f57',
                                                    border: '1px solid #d23f57',
                                                    textTransform: 'none',
                                                    '&:hover': {
                                                        color: '#d23f57',
                                                        border: '1px solid #d23f57',
                                                    },
                                                    mb: 2
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Box>
                                    </Box>
                                    <Divider />
                                    <Box mt={2}>
                                        <MyFormControlLabel onClick={() => setRadioOrder(3)} value="third" label="Cash On Delivery" control={<Radio />} />
                                    </Box>
                                </Box>
                            </RadioGroup>
                        </Box>
                        <Box my={2}>
                            <Grid container rowSpacing={{ md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }} columns={{ xs: 8, sm: 8, md: 12 }} justifyContent='left'>
                                <Grid item xs={8} sm={4} md={6} >
                                    <Link to='/checkout/' style={{ textDecoration: 'none' }}>
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
                                            Back to checkout details
                                        </Button>
                                    </Link>
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
                                                backgroundColor: '#e3364e',
                                                border: '1px solid #e3364e',
                                            },
                                            mb: 2
                                        }}
                                    >
                                        Review
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
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}

export default Payment;