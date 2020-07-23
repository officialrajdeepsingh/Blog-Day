import React, { Component,useState  } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import {POST_SEARCH} from "../graphalQurey"

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import useSWR from 'swr'
import { request } from 'graphql-request'
import {client} from "../apollo-client";


import style from '../css/Searchbar.module.scss';


const fetcher = (query, search) => request('https://www.rajdeepsingh.dev/graphql', query, { search })



export default function Searchbar(props) {
    const [search ,setSearch]=useState('')

    const { data, error } = useSWR( (search)?   [POST_SEARCH, search] : null, fetcher)

    const sumbitHandler = (e)=>{
        e.preventDefault();
     }
    
     const  changeHandler = (e)=>{
        setSearch(e.target.value)
     }
   
     return (
        <div className={style.bar}> 
           <Container className={style.box} maxWidth="sm" >
               <form className={style.formRoot} onSubmit={sumbitHandler}  noValidate autoComplete="off">
                   <TextField onChange={changeHandler} id="standard-secondary"  className={style.rootText} label="Search Here" />
               </form>  
              
              {
               data?  (
                   data.posts.nodes.map(
                       postData=>{
                           return(
                               <List key={postData.id} className={style.rootList}>
                                   <Link href={`/[read]?id=${postData.id}`} as={ `${postData.slug}-${postData.id}`} >
                                       <ListItem button={true}  alignItems="flex-start">
                                           <ListItemAvatar>
                                               <Avatar alt={postData.featuredImage.altText} src={postData.featuredImage.sourceUrl} />
                                           </ListItemAvatar>
                                           <ListItemText
                                               primary={postData.title}
                                               secondary={ 
                                               <Typography
                                                       component="span"
                                                       variant="body2"
                                                       className={style.inline}
                                                       color="textPrimary"
                                                   >
                                                       {postData.author.name}
                                                   </Typography>                                                                   
                                               }  
                                           />
                                       </ListItem>
                                   </Link> 
                               </List>
                           )
                       }
                   )
               ) : ''              
              }
           </Container>
        </div>
   )


}



  





