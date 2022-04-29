import React from 'react';
import { Button } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { auth, signInWithFacebook } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

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

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    React.useEffect(() => {
        if(loading) {
            return;
        }
        if(user) navigate('/home')
    }, [user])

    return (
        <Button 
            variant='contained' 
            size='small'
            sx={{...style.button}}
            startIcon={<FacebookOutlinedIcon />}
            onClick={signInWithFacebook}
        >
            Continue with Facebook
        </Button>
    )
}

export default FacebookProvider;