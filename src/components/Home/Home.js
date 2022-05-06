import { Box, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Slider from "./SwiperSlider/Slider";
import CardUi from './Card/CardUi'

export default function Home() {
  return (
    <Box component="div" sx={{
        width: '100%', height: 'calc(100% - 62px)',
        position: 'absolute',
        top: '55px',
        mb: 5
      }}
    >
      <Slider />

        <Box sx={{flexGrow: 1}} />
        <Typography component="div" variant="h5" sx={{display: 'inline-block', mt: 3, border: '1px solid'}}>
            Watches
        </Typography>
      <Grid container spacing={2} justifyContent={{md: "flex-end", sm: "flex-start", xs: "center"}} columns={{ sm: 6, md: 12 }} >
        {/* <h2>Watches</h2> */}
        <Grid item sm={3} xs={12}>
          <CardUi
           cardImg="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75"
           off={8}
           />
        </Grid>
        <Grid item sm={3} xs={12}>
          <CardUi
           cardImg="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F15.BarihoWatchBlack.png&w=1920&q=75"
           off={6}
           />
        </Grid>
        <Grid item sm={3} xs={12}>
          <CardUi
           cardImg="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F14.MVMTMWatchBlack.png&w=1920&q=75"
           off={9}
           />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  );
}