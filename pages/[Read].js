

import React,{Component} from 'react';
import style from '../Component/css/Read.module.scss'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { parseISO, format } from 'date-fns'

import Avatar from '@material-ui/core/Avatar';
import {POST_READ} from "../Component/graphalQurey"

import { useRouter } from 'next/router'
import {client} from "../Component/apollo-client";
import ReadCard from "../Component/Read/ReadCard";


import Link from 'next/link';
import gql from 'graphql-tag';
import Head from 'next/head'


export default function Read(props) {
  const { getData }= props;   
  const {data} = getData
 const {post} = data
  const postID= post.id
  console.log(post)
  const date = parseISO(post.date)
  return (
    <>  
        <Head> 
            <link rel='stylesheet' id='wp-block-library-css'  href='https://blog.rajdeepsingh.dev/wp-includes/css/dist/block-library/style.min.css?ver=5.4.2' media='all' />
            <link rel='stylesheet' id='wp-block-library-theme-css'  href='https://blog.rajdeepsingh.dev/wp-includes/css/dist/block-library/theme.min.css?ver=5.4.2' media='all' />
            <link rel='stylesheet' id='genericons-css'  href='https://www.rajdeepsingh.dev/wp-content/themes/writing/genericons/genericons.css?ver=3.2' type='text/css' media='all' />
            <link rel='stylesheet' id='fontawesome-css'  href='https://www.rajdeepsingh.dev/wp-content/themes/writing/framework/font-awesome/css/font-awesome.min.css?ver=1' type='text/css' media='all' />
            <link rel='stylesheet' id='asalah-plugins-css'  href='https://www.rajdeepsingh.dev/wp-content/themes/writing/pluginstyle.css?ver=1' type='text/css' media='all' />
            <link rel='stylesheet' id='asalah-style-css'  href='https://www.rajdeepsingh.dev/wp-content/themes/writing/style.css?ver=3.530' type='text/css' media='all' />
          </Head>
 
        <div className={style.outerCard}>
                <Typography component="h5" variant="subtitle1">
                    #{post.categories.edges[0].node.name}
                </Typography>
                <Typography component="h1" variant="h1" dangerouslySetInnerHTML={{ __html: post.title }}>
                </Typography>           
                <div className={style.cardBox}>
                    <Avatar alt={post.author.name} src={post.author.avatar.url}  className={style.imageSize} />
                    <Typography component="h5" title={post.author.name} variant="h5" className={style.cardBoxAuthorTitle}>
                      {post.author.name} 
                    </Typography>
                </div>
                
                <CardMedia
                    component="img"
                    alt={post.featuredImage.altText}
                    image={post.featuredImage.sourceUrl}
                    title={post.featuredImage.title}
                    className={style.cardArticalImage}
                />
                <time className=" MuiTypography-root MuiTypography-h5" dateTime={"2020-02-18T07:54:18"} >{format(date, 'LLLL	d, yyyy')}</time>
                <div key={  post.id} className={style.innerHtmlFor} dangerouslySetInnerHTML={{ __html: post.content }}></div>                  
            </div>

        <div className={style.writeComment}>
        {
          (post.commentStatus)?
              <Link href={`/comments/?id=${post.id}`} as={ `/Comment/${post.slug}-${post.id}`}> 
              <a> { post.commentCount? post.commentCount : 0} Comment Now </a> 
            </Link> :
          <Link> 
              <a> Comment Desible </a> 
          </Link>
        }   
        </div>

        <Grid className={style.grid} container  >
          <Grid item sm={12} md={12} lg={12} xs={12}>   
                  <Typography className={style.MoreStory} component="h4" variant="h3">
                      More Story 
                  </Typography>
          </Grid>
          {      
            post.categories.nodes[0].posts.nodes.map(function(data, i) {                     
                  return (1 === data.id)? '' : <ReadCard key={i} post={data}/>
                  }    
            ) 
          }               
        </Grid> 
    
    </>

  )
}

Read.getInitialProps =  async ({ pathname, query, asPath, req, res, err }) =>{               
        if(query.slug){
          const id=query.slug
              try {
                const getData= await client.query(({
                    query:POST_READ,
                    variables:{id}
                }))
                return { getData}

          }

          catch(error){
            console.log(error)
          }
      } 
        else {

          const id= query.Read.split( '-' ).pop()
          try {
            const getData= await client.query(({
                query:POST_READ,
                variables:{id}
            }))
            return { getData}

          }
          catch(error){
            console.log(error)
          }
        }

      try {
          const getData= await client.query(({
              query:POST_READ,
              variables:{id}
          }))
          return { getData}

        }

        catch(error){
          console.log(error)
        }    
}
