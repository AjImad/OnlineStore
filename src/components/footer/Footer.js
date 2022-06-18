import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box px={5} py={7}
            sx={{ position: 'relative', bottom: '0px', left: '0px', backgroundColor: '#0c0e30' }}
        >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }}
                sx={{
                    '& .MuiTypography-div': {
                        color: '#AEB4BE',
                        cursor: 'pointer',
                        lineHeight: 1.75,
                        fontSize: '15px',
                        '&:hover': {
                            color: 'white'// may be nice to see you here iam glad of you brother and sistern good after non may be nice to see you hereit's so nice yoo good morning maybe nice 
                        }
                    }
                }}
            >
                <Grid item xs={8} sm={4} md={4}>
                    <Typography component='div'>
                        <img src='./images/logoMobile.svg' alt='' />
                    </Typography>
                    <Typography component='div' sx={{ fontSize: '14px', lineHeight: 1.75, my: 2, color: '#AEB4BE' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={4} md={2}>
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
                <Grid item xs={8} sm={4} md={3}>
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
                <Grid item xs={8} sm={4} md={3}>
                    <Box>
                        <Typography component='div' variant='h5' sx={{ color: '#fff', fontWeight: 600, fontSize: '25px' }}>
                            Contact Us
                        </Typography>
                        <Box display="flex" flexDirection="column" justifyContent="left" my={2}
                            sx={{
                                '& .MuiTypography-p': {
                                    color: '#AEB4BE',
                                    mt: 1,
                                    fontSize: '14px'
                                }
                            }}
                        >
                            <Typography variant='p'>
                                70 Washington Square South, New York, NY 10012, United States
                            </Typography>
                            <Typography variant='p'>
                                Email: ajbar.imad.99@gmail.com
                            </Typography>
                            <Typography variant='p' mb={1}>
                                Phone: +212 657 709009
                            </Typography>
                            <Typography variant='p'>
                                <IconButton>
                                    <FacebookTwoToneIcon fontSize='meduim' sx={{ color: 'white' }} />
                                </IconButton>
                                <IconButton>
                                    <TwitterIcon fontSize='meduim' sx={{ color: 'white' }} />
                                </IconButton>
                                <IconButton>
                                    <YouTubeIcon fontSize='meduim' sx={{ color: 'white' }} />
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon fontSize='meduim' sx={{ color: 'white' }} />
                                </IconButton>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;