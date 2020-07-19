
import React, { Component , StrictMode } from 'react';
import Layout from '../Component/Layout'
import Grid from '@material-ui/core/Grid';
import MainSection from '../Component/MainSection/MainSection'
import Artical from '../Component/Artical/Artical'
import {POST_QUERY} from "../Component/graphalQurey"
import Myapp from './_app.js';
import Head from 'next/head';
import {client} from "../Component/apollo-client";
import ErrorBoundaries from "../Component/ErrorBoundaries";



export default function Index(props) {
    const { getData }= props;   
     const {data} = getData
    const {posts} = data

  return (
              <Grid container >
                  {
                    posts.edges.map(
                      (post, i) =>{
                            if(i === 0 ){
                              return <MainSection key={post.node.id} post={post} />
                            } else {
                              return <Artical key={post.node.id}  post={post} />   
                            }
                        }
                    )
                  }
              </Grid>
   
  )
}

Index.getInitialProps=  async (context) =>{
  try{
       const getData= await client.query(({
          query:POST_QUERY    
        }))       
        return {getData}
    }
    catch(error) {
    console.error(error )
  }

}
