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
  }
}

export default function TemporaryDrawer({bottomCart}) {

  // const [count, setCount] = React.useState(1);
  const count = React.useRef(1);
  React.useEffect( () => {
    if(count.current === 0){
      // setCount(null);
      // count.current = 1;
    }
  },[count.current]);

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

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 380 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography variant="p" display="flex" alignItems="center" sx={{mt: 2, mb: 2, ml: 5}}>
            <ShoppingBagOutlinedIcon sx={{color: 'rgb(15, 52, 96)'}}  />
            <Typography variant="span" sx={{color: 'rgb(15, 52, 96)', fontSize: '16px', fontWeight: 600, ml: 1}}>4 item</Typography>
        </Typography>
      </List>
      <Divider />
      <List>
        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{mt: 2}}>
          <Box textAlign="left" sx={{ml: 2}}>
              <Button variant='outlined' size="small" sx={style}
                onClick={ () => { count.current = count.current + 1 }}
              >
                <AddIcon fontSize='small'/>
              </Button>
              <Box textAlign="center" sx={{my: 1}}>
                <Typography variant="div">{count.current}</Typography>
              </Box>
              <Button variant='outlined' size="small" sx={style}
                    onClick={ () => { count.current = count.current - 1 }}
                    disabled={count.current === 1 ? true : false}
                  >
                    <RemoveOutlinedIcon fontSize='small'/>
              </Button>
            </Box>
            <Box sx={{ml: 3, display:"flex", flexDirection: "row"}}>
              <Typography variant="div">
                <img src="./images/watch.png" alt="watch" width="56px" height="56px"/>
              </Typography>
              <Box sx={{display:"flex", flexDirection: "column", mx: 3}}>
                <Typography variant="h5" sx={{color: '#2B3445', fontSize: '14px', fontWeight: 600}}>Watch</Typography>
                <Typography variant="div">price x Qnt</Typography>
                <Typography variant="div">price</Typography>
              </Box>
            </Box>
            <Box sx={{flexGrow: 1}} />
            <Box sx={{mr: 2}}>
              <IconButton>
              <CloseIcon sx={{color: '#757575'}} fontSize="small" />
              </IconButton>
            </Box>
        </Box>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
          {/* <Button onClick={toggleDrawer("right", true)}>Right</Button> */}
          {
          bottomCart ?
            <Badge badgeContent={4} color="error" >
              <LocalMallOutlinedIcon onClick={toggleDrawer("right", true)}/>
            </Badge>
          :          
          <IconButton size="large" sx={{backgroundColor: '#eee', ml: 2}}
            onClick={toggleDrawer("right", true)}
          >
            <Badge badgeContent={4} color="error" spacing={4}>
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
