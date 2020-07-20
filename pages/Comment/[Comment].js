import React, { Fragment,useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import {POST_COMMENT} from "../../Component/graphalQurey"
// custom Error Component
import ErrorComponent from '../../Component/ErrorComponent'


import CommentsCard from '../../Component/CommentsCard/CommentsCard'

import style from '../../Component/css/Comments.module.scss'

import Head from 'next/head'
import gql from 'graphql-tag';

import {client} from "../../Component/apollo-client";
import Link from 'next/link';
import CommentEditor from '../../Component/CommentEditor/CommentEditor'



export default function Comment({concerter, getData}) {


   

    // console.log(props , ' inside Comments ')
  

  if (concerter) {
      return <ErrorComponent concerter={concerter}/>
 
  }else{

    const { data } =  getData
    const { post } = data

      console.log(post)
      let UserId;
      let DisplayName;

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
          
          <div style={{"display":"block"}} > 
              {            
                ( !UserId && !DisplayName)? < LoginCheck/> : 
                          <CommentEditor className={style.editorStyle} keyId={post.id}   postid={post.postId}/>  
              }
          </div>
        
          { 
            post.comments && post.comments.nodes.map(
              (ReadComments)=>{
                  return (
                  <div style={{"display":"block"}}  key={ReadComments.id} >
                      <CommentsCard key={ReadComments.id}  data={ReadComments} />
                        { 
                          ReadComments.replies && ReadComments.replies.nodes.map(
                              replies=>{
                                  return <CommentsCard key={replies.id} reply={true} data={replies} />
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
}


export const  getServerSideProps =  async ({  query })=> {
          
  const id = query.Comment.split( '-' ).pop() ;       
    try{
      const getData= await client.query(({
        query:POST_COMMENT,
        variables:{id}
      }))
      return{ 
        props: {getData} }
    }
    catch(error){
      const concerter= JSON.stringify(error)
      return {
        props:{concerter}
      }
    }

}

function LoginCheck() {
  return (
    <div className={style.commentLogin}>
    <Link href="/login">
      <a target="_blank"> Login Now</a>
    </Link>
   </div>
      
    
  )
}
