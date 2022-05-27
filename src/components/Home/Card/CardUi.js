import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { Button, Box } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Link } from 'react-router-dom';

const style = {
  '&.MuiButton-root':{
    border: '1px solid #d23f57',
    maxWidth: "28px",
    maxHeight: "28px",
    minWidth: "24px",
    minHeight: "24px",
  }, 
  '&.MuiButton-outlined' :{
    color: '#d23f57',
  }
};

export default function RecipeReviewCard(props) {

  const [count, setCount] = React.useState(null);
  React.useEffect( () => {
    if(count === 0){
      setCount(null);
    }
  },[count]);

  return (
    <Card sx={{ width: 290, height: 415,'&:hover':{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'} }}>
      <CardHeader
        title={
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
                {props.off}% off
            </Typography>
        }
      />
      <Link to={`/product/` + props.productId}>
        <CardMedia
          component="img"
          height="250"
          image={props.cardImg}
          alt="Paella dish"
          sx={{cursor: 'pointer'}}
        />
      </Link>
      <CardContent>
         <Box 
            sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}
         >
          <Box>
            <Typography variant="span" sx={{color: '#373f50', fontWeight: 600}}>
                {props.productName}
            </Typography>
            <Typography>
              {
                [...Array(props.starN)].map( (item, index) => (
                    <StarIcon key={index} fontSize='small' sx={{p:0, mt: 1,color: '#faaf00'}} />
                    ))
              }
              {
                [...Array(props.starOff)].map( (item, index) => (
                    // <StarIcon key={index} fontSize='small' sx={{p:0, mt: 1, color: '#c2c2c2'}} />
                    <StarOutlineIcon key={index} fontSize='small' sx={{p:0, mt: 1, color: '#c2c2c2'}}/>
                ))
              }
        
            </Typography>
            <Typography variant='div' sx={{color: '#d23f57', mr: 1, fontWeight: 600}}>
                  ${( props.price - (props.price * props.off)/100 ).toFixed(2)}
            </Typography>
            <Typography variant='div' sx={{color: '#7d879c', textDecoration: 'line-through', fontWeight: 600}}>
                  {(props.price).toFixed(2)}
            </Typography>
          </Box>
          <Box>
           {
             count
             && 
             <>
                <Button variant='outlined' size="small" sx={style}
                  onClick={ () => { setCount(c => c-1) }}
                >
                  <RemoveOutlinedIcon fontSize='small'/>
                </Button>
                <Box textAlign="center">
                  <Typography variant="div">{count}</Typography>
                </Box>
             </>
           }
            <Button variant='outlined' size="small" sx={style}
              onClick={ () => { setCount(c => c+1) }}
            >
              <AddIcon fontSize='small'/>
            </Button>
          </Box>
       </Box>
      </CardContent>
    </Card>
  );
}