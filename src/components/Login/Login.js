
import React from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import isEmail from 'validator/lib/isEmail';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button, Divider } from '@mui/material';
import GoogleProvider from './GoogleProvider';
import FacebookProvider from './FacebookProvider';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LoadingButton } from '@mui/lab';
import { collection, doc, getDocs } from 'firebase/firestore';
import db from '../../firebase';
import { useDispatch } from 'react-redux';
import { setUserLoginDetails } from '../../features/user/userSlice';

const style = {
  modal: {
    position: 'absolute',
    top: '52%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '90vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '8px',
    p: 5,
  },
  button: {
    width: '100%',
    mt: 2,
    p: 1,
    fontSize: '15px',
    fontWeight: 600,
    textTransform: 'none',
    backgroundColor: '#e2374f',
    '&:hover': {
      backgroundColor: '#d23f57',
    }
  },
  divider: {
    width: '40%'
  },
  span: {
    padding: '0px 15px'
  },
  footerModal: {
    mt: 2,
    textAlign: 'center',
    color: '#626975',
    '& .MuiTypography-root': {
      fontSize: '15px',
      pt: 1,
      '& a': {
        color: '#2f3748',
        fontWeight: 500,
        pl: 1
      }
    }
  }
}

const Login = props => {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [email, setEmail] = React.useState('');
  const [user, loading, error] = useAuthState(auth); // listener(observer) for auth state
  const navigate = useNavigate();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log('user'.user)
    if (user) {
      navigate("/");
      const getUserInfo = async () => {
        // console.log('user id: ',user.uid)
        const userInfo = await getDocs(collection(db, "users"));
        userInfo.docs.map(doc => {
          if (doc.data().uid === user.uid)
            dispatch(setUserLoginDetails({
              name: doc.data().name,
              email: doc.data().email,
            }))
        })
      }
      getUserInfo();
    }
  }, [user])

  const handleEmail = () => {
    if (email.trim().length === 0) {
      setFormValid({
        ...formValid, isEmailValid: true,
        EmailErrorText: 'Email required'
      })
    }
    else if (!isEmail(email)) {
      setFormValid({
        ...formValid, isEmailValid: true,
        EmailErrorText: 'Invalid Email'
      })
    }
    else setFormValid({ ...formValid, isEmailValid: false, EmailErrorText: '' })
  }

  const handlePwd = () => {
    values.password.trim().length === 0 ?
      setFormValid({
        ...formValid, isPwdValid: true,
        PasswordErrorText: 'Password required'
      })
      :
      setFormValid({
        ...formValid, isPwdValid: false,
        PasswordErrorText: ''
      })
  }

  const handleSubmit = (event) => {
    if (!email && !values.password) {
      setFormValid({
        ...formValid, isEmailValid: true, isPwdValid: true,
        EmailErrorText: 'Email required',
        PasswordErrorText: 'Password required'
      })
    }
    else if (!email)
      handleEmail()
    else if (!values.password)
      handlePwd()
    else {
      const submit = async (email, password) => {
        try {
          setLoading(true);
          await signInWithEmailAndPassword(auth, email, password);
          setLoading(false);
          props.closeModal();
        } catch (error) {
          setLoading(false);
          alert(error.message);
        }
      }
      submit(email, values.password);
    }
  }

  const [formValid, setFormValid] = React.useState({
    isEmailValid: false,
    isPwdValid: false,
    EmailErrorText: '',
    PasswordErrorText: '',
  });


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Modal
      open={props.open}
      onClose={() => props.closeModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style.modal }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" component="h2" sx={{ color: '#2c3546', fontWeight: '600', lineHeight: '3.4rem' }}>
            Welcome To Ecommerce
          </Typography>
          <Typography component="p" sx={{ color: '#656b79' }}>
            Log in with email & password
          </Typography>
        </Box>

        <Box sx={{ mt: 5, color: '#606a7d' }}>
          <InputLabel sx={{ mb: 1 }}>Email or Phone Number</InputLabel>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmail}
            error={formValid.isEmailValid}
            helperText={formValid.EmailErrorText}
            placeholder="example@mail.com"
            color="error"
            size='small'
            sx={{ width: '100%' }}
            type="email"
          />

          <InputLabel sx={{ mb: 1, mt: 2 }}>Password</InputLabel>
          <FormControl sx={{ width: '100%' }}>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              color="error"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    // aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="***********"
              size='small'
              onBlur={handlePwd}
              error={formValid.isPwdValid}
            />
            {formValid.isPwdValid && <FormHelperText sx={{ color: '#dd5c5c' }}>{formValid.PasswordErrorText}</FormHelperText>}
          </FormControl>

          {!isLoading && <Button
            variant='contained'
            size='small'
            sx={{ ...style.button }}
            onClick={handleSubmit}
          >
            Login
          </Button>
          }
          {isLoading && <LoadingButton loading variant="outlined" size="large"
            sx={{
              mt: 2,
              background: '#e2374f', width: '100%',
              '& .MuiLoadingButton-loadingIndicator': {
                '& .MuiCircularProgress-root': {
                  color: '#fff',
                  fontSize: '28px',
                  fontWeight: 600,
                  p: 4
                }
              }
            }}
          >
            Loading
          </LoadingButton>
          }

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Divider sx={{ ...style.divider }} />
            <Typography component='span' sx={{ ...style.span }}>or</Typography>
            <Divider sx={{ ...style.divider }} />
          </Box>

        </Box>
        <FacebookProvider />
        <GoogleProvider />

        <Box sx={{ ...style.footerModal }}>
          <Typography component='p'
          >
            Don't have account?
            <Link to='/signup'>Sign Up</Link>
          </Typography>
          <Typography component='p'
          >
            Forgot your password?
            <Link to='/resetpwd'>Reset It</Link>
          </Typography>
        </Box>

      </Box>
    </Modal>
  )
}

export default Login;