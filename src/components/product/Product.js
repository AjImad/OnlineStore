import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { connectFirestoreEmulator, doc, getDoc } from 'firebase/firestore';
import db from '../../firebase';
import { Box, Grid, Typography, Button } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import ImageGrid from './ImageGrid';
import MainImage from './MainImage';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { addToCart, decreaseProductQuantity, increaseProductQuantity } from '../../features/cart/cartSlice';


const style = {
  button: {
    // width: '100%',
    mt: 2,
    pr: 2,
    pl: 2,
    fontSize: '15px',
    fontWeight: 600,
    textTransform: 'none',
    backgroundColor: '#e2374f',
    '&:hover': {
      backgroundColor: '#d23f57',
    }
  },
  cartButton: {
    '&.MuiButton-root': {
      border: '1px solid #d23f57',
      maxWidth: "30px",
      maxHeight: "30px",
      minWidth: "26px",
      minHeight: "26px",
      p: 2
    },
    '&.MuiButton-outlined': {
      color: '#d23f57',
    }
  }
}

export default function Product() {

  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const products = useSelector(state => state.product.value)
  const productIndex = products.findIndex(product => { return product.id === id })
  const [selectedImage, setSelectedImgae] = useState(0)

  const cartItems = useSelector(state => state.cart.cartItems)
  const itemIndex = cartItems.findIndex(item => { return item.id === products[productIndex].id })

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: products[productIndex].id, productName: products[productIndex].productName, price: (products[productIndex].price - (products[productIndex].price * products[productIndex].sold) / 100).toFixed(2), productImg: products[productIndex].productImg }))
  }
  const handleIncreaseProductQuantity = (index) => {
    dispatch(increaseProductQuantity({ id: index }))
  }
  const handleDecreaseProductQnt = (index) => {
    dispatch(decreaseProductQuantity({ id: index }))
  }

  useEffect(() => {
    products.forEach(element => {
      if (element.id === id) {
        setProduct(element);
        return;
      }
    });
  }, [])

  const images = [
    product.productImg,
    "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75",
    "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F12.Xiaomimiband2.png&w=1920&q=75"
  ]

  return (
    <Box sx={{
      width: '100%', height: 'calc(100% - 65px)',
      position: 'relative',
      top: '65px',
      mt: 5,
      mb: 5,
    }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" columns={{ xs: 10, sm: 5, md: 12 }}>
        <Grid item xs={10} sm={5} >
          <MainImage image={images[selectedImage]} />
          <ImageGrid images={images} onSelect={setSelectedImgae} selectedImage={selectedImage} />
        </Grid>
        <Grid item xs={10} sm={5} md={5} sx={{ color: '#2B3445', fontFamily: 'Helvetica Neue,sans-serif', ml: { xs: 2 } }}>
          <Typography variant="h4" sx={{
            fontWeight: 600,
            fontSize: '30px',
            mb: 3
          }}>
            {product.productName}
          </Typography>
          <Typography component='div' sx={{ fontSize: '14px', mb: 1 }}>
            <Typography variant="span" sx={{ fontWeight: 300, mr: 1 }}>Brand: </Typography>
            <Typography variant="span" sx={{ fontWeight: 600, }}>Xiaomi</Typography>
          </Typography>
          <Typography component='div' display="flex" alignItems='center' sx={{ mb: 2 }}>
            <Typography variant="span" sx={{ fontWeight: 300, mr: 1 }}>Rated: </Typography>
            <Typography variant="span" sx={{ fontWeight: 600 }}>
              {
                // [...Array(product.starNumber)].map( (item, index) => (
                Array.from(Array(product.starNumber)).map((_, index) => (
                  <StarIcon key={index} fontSize='small' sx={{ p: 0, mt: 1, color: '#faaf00' }} />
                ))
              }
              {
                // [...Array(2)].map( (item, index) => (
                Array.from(Array(product.starNumberOff)).map((_, index) => (
                  // <StarIcon key={index} fontSize='small' sx={{p:0, mt: 1, color: '#c2c2c2'}} />
                  <StarOutlineIcon key={index} fontSize='small' sx={{ p: 0, mt: 1, color: '#c2c2c2' }} />
                ))
              }
            </Typography>
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgb(210, 63, 87)', fontSize: '25px', fontWeight: 700, mb: 1 }}>
            ${
              (product.price - (product.price * product.sold) / 100).toFixed(2)
              // price
            }
          </Typography>
          <Typography component='div' variant='span' sx={{ fontSize: '14px', fontWeight: 200, mb: 2 }}>
            Stock Available
          </Typography>
          {
            itemIndex < 0 ?
              <Button
                variant='contained'
                size='small'
                sx={{ ...style.button }}
                onClick={() => { handleAddToCart() }}
              >
                Add To Cart
              </Button>
              :
              <Box display='flex' justifyContent='flex-start' alignItems='center' flexDirection='row' mt={3}>
                <Button variant='outlined' size="small" sx={{ ...style.cartButton }}
                  onClick={() => { handleDecreaseProductQnt(id) }}
                >
                  <RemoveOutlinedIcon fontSize='small' />
                </Button>
                <Box textAlign="center">
                  <Typography variant="div" sx={{ mx: 2 }}>{itemIndex === -1 ? null : cartItems[itemIndex].cartQuantity}</Typography>
                  {/* <Typography variant="div" sx={{ mx: 2 }}>01</Typography> */}
                </Box>

                <Button variant='outlined' size="small" sx={{ ...style.cartButton }}
                  onClick={() => { handleIncreaseProductQuantity(id) }}
                >
                  <AddIcon fontSize='small' />
                </Button>
              </Box>
          }
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  )
}
