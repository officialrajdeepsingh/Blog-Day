import React,{useState} from 'react'
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import style from '../Component/css/ForgetPassward.module.scss'

import Snackbar from '@material-ui/core/Snackbar';
import {FORGET_PASSWARD_MUTATION} from "../Component/graphalQurey"
import { request } from 'graphql-request';

import MuiAlert from '@material-ui/lab/Alert';


const signIN = (userData) => {
    return  request('https://www.rajdeepsingh.dev/graphql', FORGET_PASSWARD_MUTATION, userData);
  };

  function Alert(props) {
    return <MuiAlert elevation={6}  variant="filled" {...props} > 
                <div dangerouslySetInnerHTML={{ __html: props.show }}></div> 
            </MuiAlert>
}

export default function ForgetPassward(props) {
    const [gmail, setGmail] = React.useState("");
    const [data, setData] = React.useState({});
    const [error, setError] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const formSubmit= async (event)=>{
        event.preventDefault()
        if(gmail){
            const data= await signIN({                          
                "getUserName": gmail
            }).then(
                (data)=>{
                    setData(()=>{  
                        return {data} 
                     })
                }
            ).catch((error) => {
                setError(()=>{  
                    return {error} 
                 })
            })
        }

        setOpen(()=>{  
            return true 
         })
        
    }
    console.log(data , ' data ')
    console.log(error , ' error ')
    const passwardChange=(event)=>{
        setGmail(event.target.value)
    }

   const handleClose =()=>{
            setOpen(false)
   }

   const showError= error.error? error.error.response.errors[0].message : " Send Email On Your Register Email "


    return (
        <>
         <form onSubmit={formSubmit} className={style.form} noValidate autoComplete="on">
             <FormControl className={style.layout} >
                                        <InputLabel htmlFor="RestPassword">Enter Register Gmail</InputLabel>
                                        <Input
                                            id="RestPassword"
                                            type= 'gmail'
                                            onChange={passwardChange}
                                            placeholder='Enter your gamil'
                                            name="gmail" 
                                            autoComplete="gmail"

                                            
                                        />
                                    </FormControl>
                                
              <Button type="submit" className={style.button} size="small">
                       Reset 
              </Button>
        </form>

        <Snackbar open={open} anchorOrigin={ 
                    {    vertical: 'top', 
                        horizontal: 'center' }
                    } 
                 autoHideDuration={60000} onClose={handleClose}>
                  <Alert onClose={handleClose}  show={ showError } severity={error.error? "error":"success"}></Alert>
              </Snackbar>
        </>
    )
}
