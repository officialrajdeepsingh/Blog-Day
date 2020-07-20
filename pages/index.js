import React, { Component , StrictMode } from 'react';
import Head from 'next/head'
import Grid from '@material-ui/core/Grid';
import MainSection from '../Component/MainSection/MainSection'
import Artical from '../Component/Artical/Artical'
import {POST_QUERY} from "../Component/graphalQurey"
import {client} from "../Component/apollo-client";
import ErrorBoundaries from "../Component/ErrorBoundaries";
import { NextSeo } from 'next-seo';
import RajdeepSingh from '../Component/asset/RajdeepSingh.jpg'
import ErrorComponent from '../Component/ErrorComponent'


export default function Index(props) {
 const {getData,concerter} = props

 if (concerter) { 
      return <ErrorComponent concerter={concerter} />
    }else{
    
      const {data} = getData
      const {posts,generalSettings} = data
      return (
        <>
        <NextSeo
          title={generalSettings.title}
          description={generalSettings.description}
          keywords="Rajdeep Singh, Javascript, React, html,css,bootstrap"
          canonical="https://www.rajdeepsingh.dev/"
          openGraph={{
            url: 'https://www.rajdeepsingh.dev/',
            title: generalSettings.title,
            description: generalSettings.description,
            images:[ posts.edges.map(
                (post)=>{
                return {
                      url: post.node.featuredImage.sourceUrl,
                      alt: post.node.featuredImage.altText,
                    }
                }
              )
            ],
            site_name: 'Rajdeep Singh',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }} />
          <Head> 
                <link rel='icon' href={RajdeepSingh} type='image/x-icon'/>
                
          </Head>
                  <Grid component='article' container >
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
          </>
      )

  }
}


export const  getServerSideProps =  async ({res}) =>{
  
      try{ 
        const getData=await client.query(({
          query:POST_QUERY
        }))
        return {
          props: {getData}
        }
      }catch(error){
          const concerter = JSON.stringify(error)
          return { props: {concerter} }
          }
      
      
  }
