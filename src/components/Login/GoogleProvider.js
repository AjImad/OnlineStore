import React from 'react';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const style = {
    button: {
        width: '100%',
        mt: 2,
        p: 1,
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'none',
        backgroundColor: '#4285f4',
        '&:hover': {
          backgroundColor: '#4285f4',
        }
      },
}

const GoogleProvider = props => {
    return (
        <Button 
            variant='contained' 
            size='small'
            sx={{...style.button}}
            startIcon={ <GoogleIcon />}
        >
                Continue with Google
        </Button>
    )
}

export default GoogleProvider;