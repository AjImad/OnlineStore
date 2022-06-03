import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Badge, IconButton, Typography, styled } from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useSelector } from "react-redux";

const style = {
  '&.MuiButton-root':{
    border: '1px solid #d23f57',
    borderRadius: '50%',
    maxWidth: "28px",
    maxHeight: "28px",
    minWidth: "24px",
    minHeight: "24px",
  }, 
  '&.MuiButton-outlined' :{
    color: '#d23f57',
    textTransform: 'none',
    border: '1px solid #d33f56',
    fontSize: '0.9rem',
    // fontWeight: 600
    '&:hover':{
      border: '1px solid #d33f56',
    }
  },
  '&.Mui-disabled':{
    color: '#bdbdbd',
    border: '1px solid #bdbdbd'
  },
  divider:{
    '&.MuiDivider-root':{
      backgroundColor: '#fefeff'
    }
  }
}

export default function TemporaryDrawer({bottomCart}) {

  const [count, setCount] = React.useState(1);
  const productCart = useSelector(state => state.cart.cartItems);
  const cartProductNumber = useSelector(state => state.cart.cartTotalQuantity)

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
    setState({[anchor]: open });
    // console.log('current value of state.right', state.right)
  };

  const list = (anchor) => (
    <>
    <Box
      sx={{ width: {xs: '100vw', sm: 380} }}
      role="presentation"
      // onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{maxHeight: '80vh', overflowY: 'auto'}}>
      <List>
        <Typography variant="p" display="flex" alignItems="center" sx={{mt: 2, mb: 2, ml: {xs: 3, sm: 4} }}>
            <ShoppingBagOutlinedIcon sx={{color: 'rgb(15, 52, 96)'}}  />
            <Typography variant="span" sx={{color: 'rgb(15, 52, 96)', fontSize: '16px', fontWeight: 600, ml: 1}}>{cartProductNumber} item</Typography>
            <Box sx={{flexGrow: 1}} />
            {/* <IconButton onClick={toggleDrawer(anchor, false)}> */}
            <CancelOutlinedIcon 
              sx={{display: {xs: 'block', sm: 'none'},
               color: 'rgb(15, 52, 96)', mr: 2,
               cursor: 'pointer'
              }}
              onClick={toggleDrawer("right", false)}
             />
            {/* </IconButton> */}
        </Typography>
      </List>
      <Divider />
      <List>
        {
          productCart.length != 0 ?
          productCart.map( (item, index) => (
        <Box key={index} display="flex" alignItems="center" justifyContent="space-between"
          sx={{borderBottom: '1px solid rgb(243, 245, 249)', py: 2}}
        >
          <Box textAlign="left" sx={{ml: 2}}>
              <Button variant='outlined' size="small" sx={style}
                onClick={ () => { setCount(c => c+1) }}
              >
                <AddIcon fontSize='small'/>
              </Button>
              <Box textAlign="center" sx={{my: 1}}>
                <Typography variant="div">{count}</Typography>
              </Box>
              <Button variant='outlined' size="small" sx={style}
                    onClick={ () => { setCount(c => c-1) }}
                    disabled={count === 1 ? true : false}
                  >
                    <RemoveOutlinedIcon fontSize='small'/>
              </Button>
            </Box>
            <Box sx={{ml: 3, display:"flex", flexDirection: "row"}}>
              <Typography variant="div">
                <img src={item.productImg} alt="watch" width="56px" height="56px"/>
              </Typography>
              <Box sx={{display:"flex", flexDirection: "column", mx: 3}}>
                <Typography variant="h5" sx={{color: '#2B3445', fontSize: '14px', fontWeight: 600}}>{item.productName}</Typography>
                <Typography variant="span" sx={{color: 'rgb(125, 135, 156)', fontSize: '12px', my: 0.5}}>$250.00 x 1</Typography>
                <Typography variant="h5" sx={{color: 'rgb(210, 63, 87)', fontSize: '14px', fontWeight: 600}}>$250.00</Typography>
              </Box>
            </Box>
            <Box sx={{flexGrow: 1}} />
            <Box sx={{mr: 2}}>
              <IconButton>
              <CloseIcon sx={{color: '#757575'}} fontSize="small" />
              </IconButton>
            </Box>
        </Box>
          ))
          :
          <Box> there's no item in your cart</Box>
        }
      </List>
      </Box>
  
      <Box sx={{p: 2,
               position: 'absolute', bottom: 0,
               display: 'flex',
               flexDirection: 'column',
               width: '90%' 
              }}
      >
        <Button variant="contained" 
                sx={{ mb: 2,
                      textTransform: 'none',
                      fontSize: '0.9rem',
                      backgroundColor: '#d33f56',
                      '&.MuiButton-contained':{
                        '&:hover':{
                          backgroundColor: '#d33f56'
                        }
                      }
                   }}
        >
          Checkout Now ($1000.00)
        </Button>
        <Button variant="outlined" sx={style["&.MuiButton-outlined"]}>View Cart</Button>
      </Box>
    </Box>
    </>
  );

  return (
    <div>
      <React.Fragment>
          {/* <Button onClick={toggleDrawer("right", true)}>Right</Button> */}
          {
          bottomCart ?
            <Badge badgeContent={cartProductNumber} color="error" >
              <LocalMallOutlinedIcon onClick={toggleDrawer("right", true)}/>
            </Badge>
          :          
          <IconButton size="large" sx={{backgroundColor: '#eee', ml: 2}}
            onClick={toggleDrawer("right", true)}
          >
            <Badge badgeContent={cartProductNumber} color="error" spacing={4}>
              {/* shopping cart */}
              <ShoppingBagOutlinedIcon sx={{color: '#7b7c7e'}} />
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
