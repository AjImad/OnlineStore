import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Typography, Box, Button } from "@mui/material";


function Slider() {
  return (
    <>
        <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Box sx={{ width: {xs: '100%'}, display: {sm: 'flex', xs: 'inline-block'}, justifyContent: 'center', alignItems: 'center'}}>
                <Box 
                    sx={{width: {sm: '35%', xs: '90%'},  
                    wordWrap: 'break-word',
                    textAlign: 'left',
                    p: 2,
                    display: {xs: 'block', width: '100wv'},
                    xs: {flexGrow:1} 
                    }}
                >
                    <Typography component='div' variant='h3' sx={{color: '#2b3445', fontWeight: 800, fontSize: {sm: '40px', xs: '35px'} }}>
                        50% Off For Your First Shopping
                    </Typography>
                    <Typography component='p' variant='div' sx={{color: '#536e8d',pt: 2, pb: 2, fontSize: {md: '16px', sm: '14px'} }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.
                    </Typography>
                    <Button sx={{background: '#d23f57', '&:hover':{background: '#d23f57'}, color: '#fff', textTransform: 'none', pr:2, pl: 2}}>
                        Shop Now
                    </Button>
                </Box>

                <Box sx={{ width: {md: '35%', sm: '45%', xs: '80%'}, mr: {sm: '0', xs: 'auto'}, ml: {sm: '0', xs: 'auto'}}}>
                <img src="/images/nike-black.png" alt='' />
                </Box>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box sx={{ display: {sm: 'flex', xs: 'block'}, justifyContent: 'center', alignItems: 'center'}}>
                <Box 
                    sx={{width: {sm: '35%', xs: '90%'},  
                    wordWrap: 'break-word',
                    textAlign: 'left',
                    p: 2,
                    display: {xs: 'block', width: '100wv'},
                    xs: {flexGrow:1} 
                    }}
                >
                    <Typography component='div' variant='h3' sx={{color: '#2b3445', fontWeight: 800, fontSize: {sm: '40px', xs: '35px'} }}>
                        50% Off For Your First Shopping
                    </Typography>
                    <Typography wrap component='p' variant='div' sx={{color: '#536e8d',pt: 2, pb: 2, fontSize: {md: '16px', sm: '14px'} }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.
                    </Typography>
                    <Button sx={{background: '#d23f57', '&:hover':{background: '#d23f57'}, color: '#fff', textTransform: 'none', pr:2, pl: 2}}>
                        Shop Now
                    </Button>
                </Box>

                <Box sx={{ width: {md: '35%', sm: '45%', xs: '80%'}}}>
                <img src="/images/nike-black.png" alt='' />
                </Box>
            </Box>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default Slider