import React from 'react'
import { Grid, Typography } from '@mui/material'

export default function ImageGrid({images, onSelect, selectedImage}) {
  return (
    <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center' sx={{mt: {xs: 1, sm: 2}}}>
        {
        images.map( (image, index) => (
            <Grid key={index} item xs={2} sx={{cursor: 'pointer'}} onClick={() => onSelect(index)}>
            <Typography 
                variant='div' 
                sx={{
                    border: index === selectedImage  ? '1px solid #d23f57' : '1px solid #dbe2e8',
                    borderRadius: '8px', pt: 1, pb: 1
                }}
                display='flex' justifyContent='center' alignItems='center'>
                <img src={image} alt='' width="50px" height="50px"/>
            </Typography>
            </Grid>
        ))
        }
    </Grid>
  )
}
