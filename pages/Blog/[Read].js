import React,{Component} from 'react';
import style from '../../Component/css/Read.module.scss'
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
import {POST_READ} from "../../Component/graphalQurey"
import { useRouter } from 'next/router'
import {client} from "../../Component/apollo-client";
import ReadCard from "../../Component/Read/ReadCard";
import { NextSeo,BlogJsonLd } from 'next-seo';
// custom Error Component
import ErrorComponent from '../../Component/ErrorComponent'


import Link from 'next/link';
import gql from 'graphql-tag';
import Head from 'next/head'

export default function Read(props) {
  const { getData,concerter }=props

 
  if (concerter) {
    return   <ErrorComponent concerter={concerter}/>
 
  }
  else{ 
    
    const {data} = getData 
    const {post} = data
    const postID= post.id
    const date = parseISO(post.date)


      return (
        <> 
                  <NextSeo
                      title={post.title}
                      description={post.excerpt}
                  /> 
                  <BlogJsonLd
                      url="https://www.rajdeepsingh.dev/"
                      title={post.title}
                      images={[post.featuredImage.sourceUrl]}
                      datePublished={post.dateGmt}
                      dateModified={post.modifiedGmt}
                      authorName={post.author.name}
                      description={post.excerpt}
                  />
              <Head> 
                <link rel='stylesheet' id='wp-block-library-css'  href='https://www.rajdeepsingh.dev/wp-includes/css/dist/block-library/style.min.css?ver=5.4.2' media='all' />
                <link rel='stylesheet' id='wp-block-library-theme-css'  href='https://www.rajdeepsingh.dev/wp-includes/css/dist/block-library/theme.min.css?ver=5.4.2' media='all' />
                <link rel='icon' href={post.featuredImage.sourceUrl} type='image/x-icon'/>
              </Head> 
    
            <div className={style.outerCard}>
                    {
                      post.categories.edges.map(
                        (postCat)=>{ 
                          return  <Typography key={postCat.id} component="h6" variant="h6">
                        # {postCat.node.name} 
                        </Typography>}
                      )
                    }
                    
                    <Typography component="h1" variant="h1" className={style.readHeadh1} dangerouslySetInnerHTML={{ __html: post.title }}>
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
                  <Link href={`/Comment/?slug=${post.slug}-${post.id}`} as={ `/Comment/${post.slug}-${post.id}`}> 
                  <a> { post.commentCount? post.commentCount : 0} Comment Now </a> 
                </Link> :
              <Link> 
                  <a> Comment Desible </a> 
              </Link>
            }   
            </div>

            <Grid className={style.grid} container  >

            { (post.categories.nodes)?
                <Grid item sm={12} md={12} lg={12} xs={12}>   
                      <Typography className={style.MoreStory} component="h4" variant="h3">
                          More Story 
                      </Typography>
                </Grid>:""
          }
            
            {      
                post.categories.nodes[0].posts.nodes.map(function(data, i) {                     
                      return (postID === data.id)? '' : <ReadCard key={i} post={data}/>
                      }    
                ) 
              }               
            </Grid>
        </>
      )

   }

}

export const  getServerSideProps =  async ({  query, asPath }) =>{               
  const id = query.Read.split( '-' ).pop() ; 

       try{       
        const getData= await client.query(({
          query:POST_READ,
          variables:{id}
      }))
      return {
              props: { 
                        getData
                    }
      }
    }catch(error){
      const concerter= JSON.stringify(error)
      return {
        props:{concerter}
      }
    }
}
