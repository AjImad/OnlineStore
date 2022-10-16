import React from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseProductQuantity } from '../../features/cart/cartSlice';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../../features/wishlist/wishlistSlice';

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

const WishProduct = ({ productName, cardImg, off, price, starN, starOff, productId }) => {

    const productCart = useSelector(state => state.cart.cartItems);
    const itemIndex = productCart.findIndex(item => { return item.id === productId });

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ id: productId, productName: productName, price: (price - (price * off) / 100).toFixed(2), productImg: cardImg }))
    }
    const handleDecreaseProductQnt = (index) => {
        dispatch(decreaseProductQuantity({ id: index }))
    }

    const [isHeartIconClicked, setHeartIconClicked] = React.useState(true);
    let isHeartIconClickedReff = isHeartIconClicked

    React.useEffect(() => {
        isHeartIconClickedReff = isHeartIconClicked
    }, [isHeartIconClicked])

    // const wishlists = useSelector( state => state.wishlists.wishlists)
    // const wish = wishlists.find( wish => wish.id === productId)

    const handleClickOnHeartIcon = () => {
        if (isHeartIconClickedReff === true) {
            dispatch(removeFromWishlist({ id: productId }))
        }
    }

    return (
        <Box
            sx={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                backgroundColor: '#fff',
                px: 2,
                py: 1,
            }}
        >
            <Box display='flex' justifyContent='space-between' alignItems='center' mt={1}>
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
                    {/* 40% off */}
                </Typography>
                <IconButton onClick={handleClickOnHeartIcon}>
                    {
                        isHeartIconClickedReff ?
                            <FavoriteIcon fontSize='small' sx={{ color: '#d23f57' }} />
                            :
                            <FavoriteBorderIcon fontSize='small' sx={{ color: '#0c0e30' }} />
                    }
                </IconButton>
            </Box>
            <Link to={`/product/` + productId}>
                <Box textAlign='center' sx={{ cursor: 'pointer' }}>
                    <img height={250} src={cardImg} alt='' />
                </Box>
            </Link>
            <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 2 }}
            >
                <Box>
                    <Typography variant="span" sx={{ color: '#373f50', fontWeight: 600 }}>
                        {productName}
                    </Typography>
                    <Typography>
                        {
                            [...Array(starN)].map((item, index) => (
                                // [...Array(2)].map((item, index) => (
                                <StarIcon key={index} fontSize='small' sx={{ p: 0, mt: 1, color: '#faaf00' }} />
                            ))
                        }
                        {
                            [...Array(starOff)].map((item, index) => (
                                // [...Array(3)].map((item, index) => (
                                // <StarIcon key={index} fontSize='small' sx={{p:0, mt: 1, color: '#c2c2c2'}} />
                                <StarOutlineIcon key={index} fontSize='small' sx={{ p: 0, mt: 1, color: '#c2c2c2' }} />
                            ))
                        }

                    </Typography>
                    <Typography variant='div' sx={{ color: '#d23f57', mr: 1, fontWeight: 600 }}>
                        ${(price - (price * off) / 100).toFixed(2)}
                        {/* 200.00$ */}
                    </Typography>
                    <Typography variant='div' sx={{ color: '#7d879c', textDecoration: 'line-through', fontWeight: 600 }}>
                        {(price).toFixed(2)}
                        {/* 250.00$ */}
                    </Typography>
                </Box>
                <Box>
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
        </Box>
    );
}

export default WishProduct;