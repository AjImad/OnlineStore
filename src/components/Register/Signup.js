import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import isEmail from 'validator/lib/isEmail';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import GoogleProvider from '../Login/GoogleProvider';
import FacebookProvider from '../Login/FacebookProvider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { auth, registerWithEmailAndPassword } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: '0px 2px 18px #c3c9d5'
}));

const style = {
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
        width: '20%'
    }, 
      span: {
        padding: '0px 15px'
    },
    footerModal: {
        mt: 2,
        textAlign: 'center',
        color: '#626975',
        '& .MuiTypography-root':{
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

function Signup() {
    
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    
    const handleName = () => {
        if(name.trim().length === 0)
            setFormValid({
                ...formValid, isNameValid: true,
                nameErrorText: 'Name is required'
            })
        else
            setFormValid({
                ...formValid, isNameValid: false,
                nameErrorText: ''
            })
    }

    const handleEmail = () => {
    if(email.trim().length === 0 ){
        setFormValid({
            ...formValid, isEmailValid: true,
            EmailErrorText: 'Email required'
        })
        console.log('email requird')
    }
    else if(!isEmail(email)){
        setFormValid({
            ...formValid, isEmailValid: true,
            EmailErrorText: 'Invalid Email'
        })
    }
    else setFormValid( {...formValid, isEmailValid: false, EmailErrorText: ''} )
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

    const handleCreateAccount = (event) => {
        if (!email && !values.password && !name) {
            setFormValid({
              ...formValid, isEmailValid: true, isPwdValid: true, isNameValid: true,
              EmailErrorText: 'Email required',
              PasswordErrorText: 'Password required',
              nameErrorText: 'Name is required',
          })
        }
        else if (!name)
            handleCreateAccount()
        else if (!email)
          handleEmail()
        else if (!values.password)
          handlePwd()
        else registerWithEmailAndPassword(name, email, values.password);
      }
    
      const [formValid, setFormValid] =  React.useState({
          isEmailValid: false,
          isPwdValid: false,
          isNameValid: false,
          nameErrorText: '',
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
    <Box sx={{flexGrow: 1}}>
        <Grid container>
            <Grid item md={4} sm={8} xs={12} 
                sx={{mt: {sm: 2, xs: 0}, mr: 'auto', ml: 'auto'}}
            >
                <Item sx={{p: 3}}>

                    <Box sx={{textAlign: 'center'}}>
                        <Typography variant="h5" component="h2" sx={{color: '#2c3546', fontWeight: '600', lineHeight: '3.4rem'}}>
                            Create Your Account
                        </Typography>
                        <Typography component="p" sx={{color: '#656b79', fontSize: '.8rem'}}>
                            Please fill all fields to continue
                        </Typography>
                    </Box>

                    <Box 
                        sx={{
                                mt: 5, color: '#606a7d',
                                '& .MuiInputLabel-root': { fontSize: '12px', mt: 1 }
                            }}
                    >
                        <InputLabel>Full Name</InputLabel>
                        <TextField
                            onChange={(e) => setName(e.target.value)}
                            onBlur={handleName} 
                            error={formValid.isNameValid}
                            helperText={formValid.nameErrorText}
                            placeholder="Your name"
                            color="error"
                            size='small'
                            sx={{width: '100%'}}
                        />

                        <InputLabel>Email or Phone Number</InputLabel>
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleEmail} 
                            error={formValid.isEmailValid}
                            helperText={formValid.EmailErrorText}
                            placeholder="example@mail.com"
                            color="error"
                            size='small'
                            sx={{width: '100%'}}
                            type="email"
                        />
                    
                        <InputLabel sx={{mb: 1, mt: 2}}>Password</InputLabel>
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
                        {formValid.isPwdValid && <FormHelperText sx={{color: '#dd5c5c'}}>{formValid.PasswordErrorText}</FormHelperText>}
                        </FormControl>
    
                        <Button 
                        variant='contained' 
                        size='small'
                        sx={{...style.button}}
                        onClick={handleCreateAccount}
                        >
                        Create Account
                        </Button>
    
                        <Box sx={{mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Divider sx={{...style.divider}}/>
                        <Typography component='span' sx={{...style.span}}>or</Typography>
                        <Divider sx={{...style.divider}}/>
                        </Box>
    
                    </Box>
                    <FacebookProvider />       
                    <GoogleProvider />

                    <Box sx={{...style.footerModal}}>
                    <Typography component='p'
                        >
                        Don't have account?  
                        <Link to='/signup'>Sign Up</Link> 
                        </Typography>
                        <Typography component='p'
                        >
                        Forgot your password?  
                        <Link to='/signup'>Reset It</Link> 
                        </Typography>
                    </Box>
                </Item>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Signup