import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Divider, TextField, Typography } from '@mui/material';
import isEmail from 'validator/lib/isEmail';
import { sendPasswordReset } from '../../firebase';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
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
        width: '40%'
    }, 
    span: {
        padding: '0px 15px'
    },
    footerModal: {
        mb: 4,
        textAlign: 'center',
        '& .MuiTypography-root':{
          fontSize: '15px',
          '& a': {
            color: '#2f3748',
            fontWeight: 500,
            textDecoration: 'none',
          }
        }
    }
}

function Resetpwd() {

    const [email, setEmail] = React.useState('');

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

    const HandleResetPwd = (event) => {
        if (!email) {
            setFormValid({
              ...formValid, isEmailValid: true, isPwdValid: true, isNameValid: true,
              EmailErrorText: 'Email required',
              PasswordErrorText: 'Password required',
              nameErrorText: 'Name is required',
          })
        }
        else sendPasswordReset(email);
      }

    const [formValid, setFormValid] =  React.useState({
        isEmailValid: false,
        EmailErrorText: '',
    });

  return (
    <Box>
        <Grid 
            container 
            spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item md={4} sm={5} xs={10} >            
                <Item>
                    <img src='/images/forgetPwd.png' alt='' width='40%'/>
                    <Typography component="p" sx={{color: '#656b79', fontSize: '.8rem', letterSpacing: '1.2px', mt: 1}}>
                            Enter your email address, and we'll send you a link to recover your account.
                    </Typography>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmail} 
                        error={formValid.isEmailValid}
                        helperText={formValid.EmailErrorText}
                        placeholder="example@mail.com"
                        color="error"
                        size='small'
                        sx={{width: '100%', mt: 2}}
                        type="email"
                    />
                    <Button 
                      variant='contained' 
                      size='small'
                      sx={{...style.button}}
                      onClick={HandleResetPwd}
                    >
                      Send Login Link
                    </Button>

                    <Box sx={{mt: 3, mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Divider sx={{...style.divider}}/>
                      <Typography component='span' sx={{...style.span}}>or</Typography>
                      <Divider sx={{...style.divider}}/>
                    </Box>

                    <Box sx={{...style.footerModal}}>
                        <Typography component='p'>
                        <Link to='/signup'>Create an Account</Link> 
                        </Typography>
                       
                    </Box>

                </Item>
                <Box >
                    <Typography component='p'
                        sx={{
                            background: '#0f3460',
                            textAlign: 'center',
                            border: '2px solid transparent',
                            borderBottomLeftRadius: '4px',
                            borderBottomRightRadius: '4px',
                            p: 1,
                            fontSize: '15px',
                            '& a': {
                                color: 'white',
                                textDecoration: 'none'
                            },
                        }}
                        >
                            <Link to='/login' >Login Screen</Link> 
                    </Typography>
                </Box>
            </Grid>
        </Grid>
  </Box>
  )
}

export default Resetpwd;