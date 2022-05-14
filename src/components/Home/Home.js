import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "./SwiperSlider/Slider";
import CardUi from './Card/CardUi'
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import db from '../../firebase';
import { collection, getDocs } from "firebase/firestore";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));



export default function Home() {

  const [productInfo, setProductInfo] = React.useState([])
  
  useEffect( () => {
    // console.log(productInfo)
      const getProductData = async () => {
        const productData = await getDocs(collection(db, "ProductInfo"));
        setProductInfo(productData.docs.map( doc => ({id: doc.id, ...doc.data()})))
        // console.log(productData);
      }

      getProductData();
    }, [])
    
  return (
    <Box component="div" sx={{
        width: '100%', height: 'calc(100% - 62px)',
        position: 'absolute',
        top: '55px',
        mb: 5,
      }}
    >
      <Slider />
        <Typography component="div" variant="h5" sx={{display: 'inline-block', mt: 3, pl: 2, color: '#2b3445', fontWeight: 600}}>
            Watches
        </Typography>
      
      
      <Box sx={{p: 2}}>
        <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 12 }} 
        direction={{xs: "column", sm: "row"}}
        justifyContent={{xs:"center", sm: "flex-start"}}
        alignItems={{xs:"center", sm: "flex-start"}}
       >
        {
          productInfo.map( (item, index) => (
              <Grid key={index} item xs={12} sm={3}>
                <CardUi
                 productName={item.productName}
                 cardImg={item.productImg}
                 off={item.sold}
                 price={item.price}
                 starN={item.starNumber}
                 starOff={5 - item.starNumber}
                 />
              </Grid>
          ))
        }
        </Grid>  
     {/* <Grid container spacing={2} columns={{ sm: 6, md: 12 }} 
      direction={{xs: "column", sm: "row"}}
      justifyContent={{xs:"center", sm: "flex-start"}}
      alignItems={{xs:"center", sm: "flex-start"}}
     >
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
        <Grid item sm={3} xs={12}>
          <CardUi
           cardImg="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F14.MVMTMWatchBlack.png&w=1920&q=75"
           off={9}
           />
        </Grid>  <Grid item sm={3} xs={12}>
          <CardUi
           cardImg="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F14.MVMTMWatchBlack.png&w=1920&q=75"
           off={9}
           />
        </Grid>
      </Grid> */}
    </Box>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  );
}