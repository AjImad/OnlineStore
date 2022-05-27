import React from 'react'
import { Box } from '@mui/material'

export default function MainImage({image}) {
  return (
        <Box display="flex" justifyContent='center' alignItems="center">
            {/* <Typography variant="p" > */}
            <img src={image} alt='' width="300px" height="300px"/>
            {/* </Typography> */}
        </Box>
  )
}
