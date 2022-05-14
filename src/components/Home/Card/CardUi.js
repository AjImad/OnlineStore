import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';



export default function RecipeReviewCard(props) {

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
      <CardMedia
        component="img"
        height="250"
        image={props.cardImg}
        alt="Paella dish"
        sx={{cursor: 'pointer'}}
      />
      <CardContent>
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
                <StarIcon key={index} fontSize='small' sx={{p:0, mt: 1, color: '#c2c2c2'}} />
            ))
          }
     
       </Typography>
       <Typography variant='div' sx={{color: '#d23f57', mr: 1, fontWeight: 600}}>
            ${( props.price - (props.price * props.off)/100 ).toFixed(2)}
       </Typography>
       <Typography variant='div' sx={{color: '#7d879c', textDecoration: 'line-through', fontWeight: 600}}>
            {props.price}
       </Typography>
      </CardContent>
    </Card>
  );
}
