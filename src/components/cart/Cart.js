import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Cart = () => {
    return (
        <Box
            component="div" sx={{
                width: '100%',
                // height: 'calc(100vh - 62px)',
                height: '80vh',
                mt: '62px',
                position: 'relative',
                // border: '1px solid'
            }}
        >
            <Box display='flex' flexDirection='row'>
                <Typography component='p' variant='div'>
                    1. Cart
                </Typography>
                <Typography component='p' variant='div'>
                    2. Details
                </Typography>
                <Typography component='p' variant='div'>
                    3. Payment
                </Typography>
                <Typography component='p' variant='div'>
                    4. Review
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item md={8} border='1px solid'>
                    product Item
                </Grid>
                <Grid item md={4} border='1px solid'>
                    cart
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart;