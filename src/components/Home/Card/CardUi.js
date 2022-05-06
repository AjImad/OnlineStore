import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/material';


export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ width: 290, height: 415 }}>
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
      />
      <CardContent>
        <Typography variant="span" sx={{color: '#373f50', fontWeight: 600}}>
            Kossil Watch Brown
        </Typography>
       <Typography>
       <IconButton sx={{p:0, mt: 1, mb: 1,color: '#faaf00'}}>
            <StarIcon fontSize='small' />
            <StarIcon fontSize='small' />
        </IconButton>
       <IconButton sx={{p:0, mt: 1, mb: 1, color: '#c2c2c2'}}>
            <StarOutlineIcon fontSize='small'/>
            <StarOutlineIcon fontSize='small' />
            <StarOutlineIcon fontSize='small'/>
        </IconButton>
       </Typography>
       <Typography variant='div' sx={{color: '#d23f57', mr: 1, fontWeight: 600}}>
            $157.99
       </Typography>
       <Typography variant='div' sx={{color: '#7d879c', textDecoration: 'line-through', fontWeight: 600}}>
            157.99
       </Typography>
      </CardContent>
    </Card>
  );
}
