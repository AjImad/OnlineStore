import React from 'react';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, signInWithGoogle } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLoginDetails } from '../../features/user/userSlice';

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

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (user) {
            props.closeModal()
            navigate('/')
            dispatch(setUserLoginDetails({
                name: user.displayName,
                email: user.email
            }))
        }
    }, [user, loading])

    return (
        <Button
            variant='contained'
            size='small'
            sx={{ ...style.button }}
            startIcon={<GoogleIcon />}
            onClick={signInWithGoogle}
        >
            Continue with Google
        </Button>
    )
}

export default GoogleProvider;