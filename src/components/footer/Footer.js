import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box mb={5} p={5}
            sx={{ backgroundColor: '#0c0e30' }}
        >
            <Grid container spacing={2}
                sx={{
                    '& .MuiTypography-div': {
                        color: '#AEB4BE',
                        cursor: 'pointer',
                        lineHeight: 1.75,
                        '&:hover': {
                            color: 'white'
                        }
                    }
                }}
            >
                <Grid item md={4}>
                    <Typography component='div'>
                        <img src='./images/logoMobile.svg' alt='' />
                    </Typography>
                    <Typography component='div' sx={{ fontSize: '14px', lineHeight: 1.75, my: 2, color: '#AEB4BE' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                    </Typography>
                </Grid>
                <Grid item md={2}

                >
                    <Box>
                        <Typography component='div' variant='h5' sx={{ color: '#fff', fontWeight: 600, fontSize: '25px' }}>
                            About Us
                        </Typography>
                        <Box display="flex" flexDirection="column" justifyContent="left" my={2} >
                            <Typography variant='div'>
                                Careers
                            </Typography>
                            <Typography variant='div'>
                                Our Stores
                            </Typography>
                            <Typography variant='div'>
                                Our Cares
                            </Typography>
                            <Typography variant='div'>
                                Terms & Conditions
                            </Typography>
                            <Typography variant='div'>
                                Privacy Policy
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3}>
                    <Box>
                        <Typography component='div' variant='h5' sx={{ color: '#fff', fontWeight: 600, fontSize: '25px' }}>
                            Customer Care
                        </Typography>
                        <Box display="flex" flexDirection="column" justifyContent="left" my={2} >
                            <Typography variant='div'>
                                Help Center
                            </Typography>
                            <Typography variant='div'>
                                How to Buy
                            </Typography>
                            <Typography variant='div'>
                                Track Your Order
                            </Typography>
                            <Typography variant='div'>
                                Corporate & Bulk Purchasing
                            </Typography>
                            <Typography variant='div'>
                                Returns & Refunds
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3}>
                    Grid 3
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;