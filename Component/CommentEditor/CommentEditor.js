import React from 'react'
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Button from '@material-ui/core/Button';
import style from '../css/Comments.module.scss'
import { request } from 'graphql-request';
import {COMMENT_MUTATION} from "../graphalQurey"
import useSWR from 'swr'


const signUP = (input) => {
  return  request('https://www.rajdeepsingh.dev/graphql', COMMENT_MUTATION, input);
};


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} > 
              <div dangerouslySetInnerHTML={{ __html: props.show }}></div> 
          </MuiAlert>
}

 export default  function CommentEditor(props) {
  const [value, setValue] = React.useState();
    const [selectedTab, setSelectedTab] = React.useState("write");    
    const [open, setOpen] = React.useState(false);
    const [comment, setComment] = React.useState({});
    const [getDisplayName, setGetDisplayName] = React.useState({});
    const [getUserId, setgetUserId] = React.useState({});

    const converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    });



    const submitComment= async (e) => {
        e.preventDefault();           
          const UserId= localStorage.getItem("userId")
          const DisplayName= localStorage.getItem("displayName");
          
          await signUP( {
            "input":{
                    "content": value,
                    "author": DisplayName, 
                    "userId":UserId,
                    "clientMutationId": "createComment",
                    "commentOn": props.postid
            }
          }  
        ).then(
          (data)=>{
            setComment( ()=>{ return {data} })
          }
        ).catch((error)=> setComment(()=> { return {error}}))
        setOpen(()=> true );


        }
      
     const handleClose = () => {      
         setOpen(false);
      };
      console.log(comment, ' comment ');

      const ShowAlertError= (comment.error)? comment.error.response.errors[0].message:'submit'

    return (
      <div key={props.keyId} className="container"> 

        <form onSubmit={submitComment} > 
          <ReactMde
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
              Promise.resolve(converter.makeHtml(markdown))
            }
            childProps={{
              writeButton: {
                tabIndex: -1
              }
            }}
          />
            <Button type="submit" className={style.productButton} size="small">
                            Submit  
            </Button>
        </form>

      
        
      
       <Snackbar open={open} anchorOrigin={ 
                {    vertical: 'top', 
                    horizontal: 'center' }
                } 
                autoHideDuration={6000} onClose={handleClose}>
                   <Alert onClose={handleClose} show={ShowAlertError} severity= {(comment.error)? "error":'success'} ></Alert>
       </Snackbar> 
        
        

       
      </div>
    );
  }