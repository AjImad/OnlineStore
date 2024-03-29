import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { Button, Box, IconButton } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseProductQuantity } from '../../../features/cart/cartSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToWishlist, removeFromWishlist } from '../../../features/wishlist/wishlistSlice';
import { setProductData } from '../../../features/product/productSlice';

const style = {
  '&.MuiButton-root': {
    border: '1px solid #d23f57',
    maxWidth: "28px",
    maxHeight: "28px",
    minWidth: "24px",
    minHeight: "24px",
  },
  '&.MuiButton-outlined': {
    color: '#d23f57',
  }
};

export default function RecipeReviewCard({ productName, cardImg, off, price, starN, starOff, productId }) {


  const [isHeartIconClicked, setHeartIconClicked] = React.useState(false);
  let isHeartIconClickedReff = isHeartIconClicked

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: productId, productName: productName, price: (price - (price * off) / 100).toFixed(2), productImg: cardImg }))
  }
  const handleDecreaseProductQnt = (index) => {
    dispatch(decreaseProductQuantity({ id: index }))
  }
  const productCart = useSelector(state => state.cart.cartItems);
  const itemIndex = productCart.findIndex(item => { return item.id === productId });

  React.useEffect(() => {
    isHeartIconClickedReff = isHeartIconClicked
  }, [isHeartIconClicked])

  const handleClickOnHeartIcon = () => {
    if (isHeartIconClickedReff === false) {
      dispatch(addToWishlist({ id: productId, productName: productName, sold: off, price: price, productImg: cardImg, starNumber: starN, starNumberOff: starOff }))
      setHeartIconClicked(true)
    } else {
      dispatch(removeFromWishlist({ id: productId }))
      setHeartIconClicked(false)
    }
  }

  return (
    <Card sx={{ width: 290, height: 440, '&:hover': { boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' } }}>
      <CardHeader
        title={
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography component='span' variant='div'
              sx={{
                background: '#d23f57',
                color: '#f6f9fc',
                pr: 1.5,
                pl: 1.5,
                pt: 0.5,
                pb: 0.5,
                borderRadius: '15px',
                fontSize: '12px',
              }}
            >
              {off}% off
            </Typography>
            <IconButton onClick={handleClickOnHeartIcon}>
              {
                !isHeartIconClickedReff ?
                  <FavoriteBorderIcon fontSize='small' sx={{ color: '#0c0e30' }} />
                  :
                  <FavoriteIcon fontSize='small' sx={{ color: '#d23f57' }} />
              }
            </IconButton>
          </Box>
        }
      />
      <Link to={`/product/` + productId}>
        <CardMedia
          component="img"
          height="250"
          image={cardImg}
          alt="Paella dish"
          sx={{ cursor: 'pointer' }}
          onClick={() => dispatch(setProductData({ id: productId, productName: productName, sold: off, price: price, productImg: cardImg, starNumber: starN, starNumberOff: starOff }))}
        />
      </Link>
      <CardContent >
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
        >
          <Box>
            <Typography variant="span" sx={{ color: '#373f50', fontWeight: 600 }}>
              {productName}
            </Typography>
            <Typography>
              {
                [...Array(starN)].map((item, index) => (
                  <StarIcon key={index} fontSize='small' sx={{ p: 0, mt: 1, color: '#faaf00' }} />
                ))
              }
              {
                [...Array(starOff)].map((item, index) => (
                  // <StarIcon key={index} fontSize='small' sx={{p:0, mt: 1, color: '#c2c2c2'}} />
                  <StarOutlineIcon key={index} fontSize='small' sx={{ p: 0, mt: 1, color: '#c2c2c2' }} />
                ))
              }

            </Typography>
            <Typography variant='div' sx={{ color: '#d23f57', mr: 1, fontWeight: 600 }}>
              ${(price - (price * off) / 100).toFixed(2)}
            </Typography>
            <Typography variant='div' sx={{ color: '#7d879c', textDecoration: 'line-through', fontWeight: 600 }}>
              {(price).toFixed(2)}
            </Typography>
          </Box>
          <Box >
            {
              itemIndex === -1 ? null : productCart[itemIndex].cartQuantity
                &&
                <>
                  <Button variant='outlined' size="small" sx={style}
                    onClick={() => { handleDecreaseProductQnt(productId) }}
                  >
                    <RemoveOutlinedIcon fontSize='small' />
                  </Button>
                  <Box textAlign="center">
                    <Typography variant="div">{itemIndex === -1 ? null : productCart[itemIndex].cartQuantity}</Typography>
                  </Box>
                </>
            }
            <Button variant='outlined' size="small" sx={style}
              onClick={() => { handleAddToCart() }}
            >
              <AddIcon fontSize='small' />
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
