import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import {POST_COMMENT} from "../../Component/graphalQurey"

import CommentsCard from '../../Component/CommentsCard/CommentsCard'

import style from '../../Component/css/Comments.module.scss'

import Head from 'next/head'
import gql from 'graphql-tag';

import {client} from "../../Component/apollo-client";
import Link from 'next/link';
import CommentEditor from '../../Component/CommentEditor/CommentEditor'



export default function Comment(props) {
  const { getData }= props;   
  const {data} = getData
 const {post} = data
 const UserId=''
 const DisplayName=''
 if (process.browser) {
   UserId= localStorage.getItem("userId")
   DisplayName= localStorage.getItem("displayName");
}


  return (
    <>       
      <Head> 
        <meta charSet="utf-8" />
      </Head>
      <Container className={style.root}>
      
        <div className={style.cardInner}>
            <Typography component="h3" variant="h3"  className={style.heading}>
                Write a Comment
            </Typography>
            <Card className={style.cardBox}>
            <Avatar alt={post.featuredImage.altText} src={post.featuredImage.sourceUrl} className={style.imageSize} />
            <Link href={`/[read]?id=${post.id}`} as={ `${post.slug}-${post.id}`}>
                <a dangerouslySetInnerHTML={{ __html: post.title }} target="_blank" className={style.cardBoxTitle}>
                </a>
            </Link>
            </Card>
        </div>
      
        <div className={style.editorStyle}> 

          {
            
            (UserId === "undefined" && DisplayName==="undefined")?
              <div className={style.commentLogin}>
                <Link>
                  <a> Login </a>
                </Link>
            </div> :
              <CommentEditor keyId={post.id}   postid={post.postId}/>
            
          }

        

         
        </div> 
     
      { 
        post.comments && post.comments.nodes.map(
          (ReadComments)=>{
              return (
                <div key={ReadComments.id}>
                  <CommentsCard  data={ReadComments} />
                  { 
                    ReadComments.replies && ReadComments.replies.nodes.map(
                        replies=>{
                            return <CommentsCard   reply={true} data={replies} />
                        }
                      )
                  } 

                </div>
              )       
          }
       )
      }
  </Container>  
    
    </>
  )
}


Comment.getInitialProps =  async ({ pathname, query, asPath, req, res, err })=> {
          
  const id = query.Comment.split( '-' ).pop() ;       
  try{
    const getData= await client.query(({
      query:POST_COMMENT,
      variables:{id}
    }))
    return { getData}
  }
  catch(error){
    console.error(error)
  }

}