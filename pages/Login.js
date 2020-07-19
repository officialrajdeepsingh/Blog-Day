import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import MuiAlert from '@material-ui/lab/Alert';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from 'next/link'
import gql from 'graphql-tag';
import Snackbar from '@material-ui/core/Snackbar';
import { useRouter } from 'next/router'

import style from '../Component/css/Login.module.scss'

// with SWR and graphql-request
import { request } from 'graphql-request';
import loginImage from '../Component/asset/loginImage.png'
 
import {LOGIN_MUTATION} from "../Component/graphalQurey"

  const signIN = (userData) => {
    return  request('https://www.rajdeepsingh.dev/graphql', LOGIN_MUTATION, userData);
  };

function Alert(props) {
    return <MuiAlert elevation={6}  variant="filled" {...props} > 
                <div dangerouslySetInnerHTML={{ __html: props.show }}></div> 
            </MuiAlert>
}

export default function Login(props) {
    const router= useRouter()
    // signIN
    const [passward, setPassward] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [authdata, setAuthToken] = React.useState({});
    const [showPassword, setShowPassword] = React.useState(false);

                const formSubmit = async (event) => {
                    event.preventDefault();
                    const data= await signIN({                          
                        "username": userName,
                        "password": passward
                    }).then(
                        (data)=>{
                            setAuthToken(()=>{  
                                return {data} 
                             })
                        }
                    ).catch((error) => {
                        setAuthToken(()=>{  
                            return {error} 
                         })
                    })
                    
                     setOpen(()=>{  
                        return true 
                     })

                     if(!data==="undefined"){
                        localStorage.setItem("authToken", data.login.authToken);
                        localStorage.setItem("userId", data.login.user.userId);
                        localStorage.setItem("displayName",data.login.user.username);
                        router.push("/")
        
                    }

                    
                  }
            const passwardChange = (event) => {
                setPassward(event.target.value)
            };
            const userNameChange = (event) => {
                setUserName(event.target.value)
            };
            const handleClickShowPassword = () => {
                setShowPassword(true)           
            };
            const handleClose = () => {      
                setOpen(false);
             };

             const ShowAlertError= (authdata.error)? authdata.error.response.errors[0].message:'submit'

            
    return (
        <>
            <Container className={style.containerBox}>
                <Card className={style.root} >
                    <div className={style.innerCard}>
                        <div className={style.details}>
                            <CardContent className={style.cardContentInner}>
                                <Typography className={style.typeH5} component="h6" variant="h6">
                                    Welcome Back!
                                </Typography>
                                <Typography className={style.typeH3} component="h3" variant="h2">
                                    Join With Me
                                </Typography>
                                <form onSubmit={formSubmit} className={style.form} noValidate autoComplete="off">
                                   <>
                                    <TextField onChange={userNameChange} id="userField" className={style.textControl} placeholder='Enter Your Email Or User Name   ' label=" Email Or User Name " />
                                
                                    <FormControl className={style.textControl} >
                                        <InputLabel htmlFor="LoginPassword">Password</InputLabel>
                                        <Input
                                            id="LoginPassword"
                                            type= {showPassword ? 'text' : 'password'}
                                            value={passward}
                                            onChange={passwardChange}
                                            placeholder='Enter your Passward'
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                
                                    <Button type="submit" 
                                        className={style.productButton} size="small">
                                            Submit
                                    </Button>
                                
                                    </>
                                </form>


                            </CardContent>

                            <div className={style.typeLogin}> 
                                <Typography className={style.anchorLink}  component="h6" variant="h6">
                                        Signup With Me       
                                </Typography>
                                <Link  href='/signup'>  
                                       <a> Click Here </a>
                                </Link>
                            </div>    

                        </div>
                        <CardMedia
                            component="img"
                            alt="Login"
                            image={loginImage}
                            title="Login with me"
                            className={style.cardImage}
                        />

                    </div>
                </Card>
            </Container>

            <Snackbar open={open} anchorOrigin={ 
                    {    vertical: 'top', 
                        horizontal: 'center' }
                    } 
                 autoHideDuration={60000} onClose={handleClose}>
                  <Alert onClose={handleClose}  show={ShowAlertError} severity= {(authdata.error)? "error":'success'}></Alert>
              </Snackbar> 
        </>
    )
}







