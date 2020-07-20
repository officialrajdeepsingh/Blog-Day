import React, { useState } from 'react'
import Layout from '../Component/Layout'
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
import Checkbox from '@material-ui/core/Checkbox';
import Link from 'next/link'
import { NextSeo } from 'next-seo';


import style from '../Component/css/Signup.module.scss'

import signupImage from '../Component/asset/signupImage.png'
import MuiAlert from '@material-ui/lab/Alert';

// with SWR and graphql-request
import { request } from 'graphql-request';
import {SIGNUP_MUTATION} from "../Component/graphalQurey"
import Snackbar from '@material-ui/core/Snackbar';
import { useRouter } from 'next/router'


  const signUP = (userData) => {
    return  request('https://www.rajdeepsingh.dev/graphql', SIGNUP_MUTATION, userData);
  };
  
  function Alert(props) {
    return <MuiAlert elevation={6}  variant="filled" {...props} > 
                <div dangerouslySetInnerHTML={{ __html: props.show }}></div> 
            </MuiAlert>
}

export default function Signup(props) {
    const router= useRouter()

    const [passward, setPassward] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [matchPassward, setMatchPassward] = useState(false);
    const [checkbox, setCheckbox] = useState(true);
    const [userName, setuserName] = useState("");
    const [gmail, setgmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [open, setOpen] = useState(false);
    const [getSubmitData, setGetSubmitData] = React.useState({});
    
   // form  handler function 
     const handleChange = (event) => {
        setPassward( event.target.value )  
      };
    
      const  handleClickShowPassword = () => {
        setShowPassword(!showPassword)
      };

    const confirmHandleChange = (event) => {
        setConfirmPassword( event.target.value)
       
      if( passward === event.target.value ){
        setMatchPassward(false)
      }else{
        setMatchPassward(true)
      }

    };
    
   const  confirmHandleClickShowPassword = () => {
       setShowconfirmPassword(!showPassword)
    };
    const checkboxChange=()=>{
        setCheckbox(!checkbox)
    }

    const handleMouseDownPassword=()=>{

    }
    const submitFormUser = async (event) => {
            event.preventDefault();
            const  data=   await  signUP({
                    "userData":{ 
                            "username": userName,
                            "email": gmail,
                            "password": passward,
                            "displayName": displayName,
                            "clientMutationId": "registerUser",
                            "registered": "true" 
                    }
            }).then((data)=>{
                setGetSubmitData(()=>{  
                            return {data} 
                         })
            }).catch((error) => {
                setGetSubmitData(()=>{  
                    return {error} 
                 })
            })
   
             setOpen(()=>{  
                return true 
             })
            //  data: undefined
            if(!data==="undefined"){
    
                localStorage.setItem("authToken", data.registerUser.user.jwtAuthToken);
                localStorage.setItem("userId", data.registerUser.user.userId);
                localStorage.setItem("displayName",data.registerUser.user.username);
                router.push("/")

            }
                   
          }

          const handleClose = () => {      
            setOpen(false);
         };
      

         const ShowAlertError= (getSubmitData.error)? getSubmitData.error.response.errors[0].message:'submit'

        return (
            <>
            
                  <NextSeo
                    title="Signup -- Learn With me "
                    description="Signup page "
                />
                <Container className={style.containerBox}>
                    <Card className={style.root} >
                        <div className={style.innerCard}>
                            <div className={style.details}>
                                <CardContent className={style.cardContentInner}>
                                    <Typography className={style.typeH5} component="h6" variant="h6">
                                        Welcome Back!
                                    </Typography>
                                    <Typography className={style.typeH3} component="h3" variant="h2">
                                        Learn With Me
                                    </Typography>
                                    <form 
                                           //  on Submit handler  
                                        onSubmit={submitFormUser}
                                        className={style.form}
                                        noValidate autoComplete="on"
                                      >
                                        <TextField autoComplete="name" onChange={(e)=>setDisplayName(e.target.value)} id="fullName" className={style.textControl} placeholder=' Exmple:Rajdeep Singh  ' label="Full Name" />
                                        <TextField autoComplete="username" onChange={(e)=>setuserName(e.target.value)}  id="userName" className={style.textControl} placeholder=' Exmple:Officialrajdeepsingh  ' label="User Name" />
                                        <TextField autoComplete="email" onChange={(e)=>setgmail(e.target.value)}  id="userGmail" className={style.textControl} placeholder=' 123@gmail.com  ' label="Gmail" />

                                        <FormControl className={style.textControl} >
                                            <InputLabel htmlFor="password">Password</InputLabel>
                                            <Input
                                                id="password"
                                                type= {showPassword ? 'text' : 'password'}
                                                value={passward}
                                                onChange={handleChange}
                                                placeholder='Exmple: Rb@1%2^3*56'
                                                autoComplete="new-password"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                        <FormControl className={style.textControl} >
                                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                                            <Input
                                                id="confirmPassword"
                                                type= {showconfirmPassword ? 'text' : 'password'}
                                                value={confirmPassword}
                                                onChange={confirmHandleChange}
                                                error={matchPassward}
                                                paceholder='Exmple Confirm Passward :  Rb@1%2^3*56'
                                                autoComplete="new-password"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={confirmHandleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                        <FormControlLabel
                                            control={
                                                
                                                <Checkbox
                                                    checked={checkbox}
                                                    onChange={checkboxChange}
                                                    name="checkBox"
                                                    color="primary"
                                                    className={ style.checkBox }
                                                />

                                            }
                                            
                                            label="I Agree to Terms & Conditions "
                                            
                                        />
                                        
                                        <Button type="submit"
                                            //  send data on this button 
                                           className={style.productButton} size="small">
                                               Submit
                                    </Button>
                                    </form>


                                </CardContent>
                                

                                <div className={style.typeLogin}> 
                                    <>
                                        <Typography className={style.anchorLink}  component="h6" variant="h6">
                                                Login With Me 
                                        </Typography>
                                        <Link  href="/login">
                                             <a> Click Here  </a> 
                                        </Link>
                                    </>

                                </div>    

                            </div>

                            <CardMedia
                                component="img"
                                alt="signup Image"
                                image={signupImage}
                                title="signup Now "
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
                  <Alert onClose={handleClose}  show={ShowAlertError} severity= {(getSubmitData.error)? "error":'success'}></Alert>
              </Snackbar>
            </>
        )
    
}
