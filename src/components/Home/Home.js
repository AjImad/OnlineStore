import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "./SwiperSlider/Slider";
import CardUi from './Card/CardUi'
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import db from '../../firebase';
import { collection, doc, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "../../features/product/productSlice";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));



export default function Home() {

  const [productInfo, setProductInfo] = React.useState([])
  // let productInfo = [];
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.name);

  useEffect(() => {
    // console.log(productInfo)
    const getProductData = async () => {
      const productData = await getDocs(collection(db, "ProductInfo"));
      if (productData) {
        setProductInfo(productData.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        // productData.docs.map( doc => { 
        //   productInfo = [...productInfo, {id: doc.id, ...doc.data()}]
        // })

      }
      else
        console.log("no such document")
    }

    getProductData();

    // console.log(productInfo)
    // const timer = setTimeout(() => {
    //   // console.log('productInfo: ', productInfo)
    // }, 3000);

    // return () => clearTimeout(timer);
  }, [userName])

  return (
    <Box component="div" sx={{
      width: '100%', height: 'calc(100% - 62px)',
      // position: 'relative',
      top: '55px',
      mb: 5,
    }}
    >
      <Slider />
      <Typography component="div" variant="h5" sx={{ display: 'inline-block', mt: 3, pl: 2, color: '#2b3445', fontWeight: 600 }}>
        Watches
      </Typography>


      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} columns={{ xs: 12, sm: 6, md: 12 }}
          direction={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "center", sm: "flex-start" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          {
            productInfo && productInfo.map((item, index) => {
              dispatch(setProductData({
                product: item,
              }))
              return (
                <Grid key={index} item xs={12} sm={3}>
                  <CardUi
                    productName={item.productName}
                    cardImg={item.productImg}
                    off={item.sold}
                    price={item.price}
                    starN={item.starNumber}
                    starOff={5 - item.starNumber}
                    productId={item.id}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  );
}