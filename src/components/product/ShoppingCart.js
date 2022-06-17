import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Badge, IconButton, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart, decreaseProductQuantity, increaseProductQuantity } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const style = {
  '&.MuiButton-root': {
    border: '1px solid #d23f57',
    borderRadius: '50%',
    maxWidth: "28px",
    maxHeight: "28px",
    minWidth: "24px",
    minHeight: "24px",
  },
  '&.MuiButton-outlined': {
    color: '#d23f57',
    textTransform: 'none',
    border: '1px solid #d33f56',
    fontSize: '0.9rem',
    // fontWeight: 600
    '&:hover': {
      border: '1px solid #d33f56',
    }
  },
  '&.Mui-disabled': {
    color: '#bdbdbd',
    border: '1px solid #bdbdbd'
  },
  divider: {
    '&.MuiDivider-root': {
      backgroundColor: '#fefeff'
    }
  }
}

export default function TemporaryDrawer({ bottomCart }) {

  const cart = useSelector(state => state.cart);
  const cartProductNumber = useSelector(state => state.cart.cartTotalQuantity)
  const dispatch = useDispatch()

  const handlerRemoveProduct = (index) => {
    dispatch(removeProductFromCart({ id: index }))
  }
  const handleIncreaseProductQuantity = (index) => {
    dispatch(increaseProductQuantity({ id: index }))
  }
  const handleDecreaseProductQnt = (index) => {
    dispatch(decreaseProductQuantity({ id: index }))
  }
  // console.log(productCart)
  // const count = React.useRef(1);
  // React.useEffect( () => {
  //   if(count.current === 0){
  //     // setCount(null);
  //     // count.current = 1;
  //   }
  // },[count.current]);

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
    // console.log('current value of state.right', state.right)
  };

  const list = (anchor) => (
    <>
      <Box
        sx={{ width: { xs: '100vw', sm: 380 } }}
        role="presentation"
        // onClick={toggleDrawer(anchor, true)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <List>
            <Typography variant="p" display="flex" alignItems="center" sx={{ mt: 2, mb: 2, ml: { xs: 3, sm: 4 } }}>
              <ShoppingBagOutlinedIcon sx={{ color: 'rgb(15, 52, 96)' }} />
              <Typography variant="span" sx={{ color: 'rgb(15, 52, 96)', fontSize: '16px', fontWeight: 600, ml: 1 }}>{cart.cartTotalQuantity} item</Typography>
              <Box sx={{ flexGrow: 1 }} />
              {/* <IconButton onClick={toggleDrawer(anchor, false)}> */}
              <CancelOutlinedIcon
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  color: 'rgb(15, 52, 96)', mr: 2,
                  cursor: 'pointer'
                }}
                onClick={toggleDrawer("right", false)}
              />
              {/* </IconButton> */}
            </Typography>
          </List>
          <Divider />
          <List sx={{ height: '60vh', display: cart.cartItems.length === 0 ? 'flex' : 'inline-block', justifyContent: 'center', alignItems: 'center' }} >
            {
              cart.cartItems.length !== 0 ?
                cart.cartItems.map((item, index) => (
                  <Box key={index} display="flex" alignItems="center" justifyContent="space-between"
                    sx={{ borderBottom: '1px solid rgb(243, 245, 249)', py: 2 }}
                  >
                    <Box textAlign="left" sx={{ ml: 2 }}>
                      <Button variant='outlined' size="small" sx={style}
                        onClick={() => { handleIncreaseProductQuantity(item.id) }}
                      >
                        <AddIcon fontSize='small' />
                      </Button>
                      <Box textAlign="center" sx={{ my: 1 }}>
                        <Typography variant="div">{item.cartQuantity}</Typography>
                      </Box>
                      <Button variant='outlined' size="small" sx={style}
                        onClick={() => handleDecreaseProductQnt(item.id)}
                        disabled={item.cartQuantity === 1 ? true : false}

                      >
                        <RemoveOutlinedIcon fontSize='small' />
                      </Button>
                    </Box>
                    <Link to={`/product/` + item.id} style={{ textDecoration: 'none' }}>
                      <Box sx={{ ml: 3, display: "flex", flexDirection: "row", cursor: 'pointer' }}>
                        <Typography variant="div">
                          <img src={item.productImg} alt="watch" width="56px" height="56px" />
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", mx: 3 }}>
                          <Typography variant="h5" sx={{ color: '#2B3445', fontSize: '14px', fontWeight: 600 }}>{item.productName}</Typography>
                          <Typography variant="span" sx={{ color: 'rgb(125, 135, 156)', fontSize: '12px', my: 0.5 }}>${item.price} x {item.cartQuantity}</Typography>
                          <Typography variant="h5" sx={{ color: 'rgb(210, 63, 87)', fontSize: '14px', fontWeight: 600 }}>${(item.price * item.cartQuantity).toFixed(2)}</Typography>
                        </Box>
                      </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ mr: 2 }}>
                      <IconButton onClick={() => handlerRemoveProduct(index)}>
                        <CloseIcon sx={{ color: '#757575' }} fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                ))
                :
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{ width: '60%' }}>
                  <Typography variant="div">
                    <img src="https://bazar-react.vercel.app/assets/images/logos/shopping-bag.svg" alt="shopping bag" />
                  </Typography>
                  <Typography variant="p" noWrap={false} textAlign='center' sx={{ color: '#9199aa', mt: 2 }}>
                    Your shopping bag is empty. Start shopping
                  </Typography>
                </Box>
            }
          </List>
        </Box>
        {
          cart.cartItems.length !== 0 ?

            <Box sx={{
              p: 2,
              position: 'absolute', bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              width: '90%'
            }}
            >
              <Button variant="contained"
                sx={{
                  mb: 2,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  backgroundColor: '#d33f56',
                  '&.MuiButton-contained': {
                    '&:hover': {
                      backgroundColor: '#d33f56'
                    }
                  }
                }}
              >
                Checkout Now (${cart.cartTotalAmount.toFixed(2)})
              </Button>
              <Button variant="outlined" sx={style["&.MuiButton-outlined"]}>View Cart</Button>
            </Box>
            :
            <></>
        }
      </Box >
    </>
  );

  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer("right", true)}>Right</Button> */}
        {
          bottomCart ?
            <Badge badgeContent={cartProductNumber} color="error" >
              <LocalMallOutlinedIcon onClick={toggleDrawer("right", true)} />
            </Badge>
            :
            <IconButton size="large" sx={{ backgroundColor: '#eee', ml: 2 }}
              onClick={toggleDrawer("right", true)}
            >
              <Badge badgeContent={cartProductNumber} color="error" spacing={4}>
                {/* shopping cart */}
                <ShoppingBagOutlinedIcon sx={{ color: '#7b7c7e' }} />
              </Badge>
            </IconButton>
        }
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
