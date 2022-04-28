import React from 'react';
import { Button } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const style = {
    button: {
        width: '100%',
        mt: 2,
        p: 1,
        fontWeight: 600,
        fontSize: '12px',
        textTransform: 'none',
        backgroundColor: '#3b5998',
        '&:hover': {
          backgroundColor: '#3b5998',
        }
      },
}

const FacebookProvider = props => {
    return (
        <Button 
            variant='contained' 
            size='small'
            sx={{...style.button}}
            startIcon={<FacebookOutlinedIcon />}
        >
            Continue with Facebook
        </Button>
    )
}

export default FacebookProvider;