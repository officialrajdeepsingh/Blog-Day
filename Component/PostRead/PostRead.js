import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';

import style from '../css/PostRead.module.scss'
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Writer Query

const POST_QUERY = gql`{
  post(id: "cG9zdDoxODc=") {
    id
    commentCount
    title
    date
    featuredImage {
      altText
      sourceUrl
      title
    }
    author {
      avatar {
        url
      }
    }
    
  }
}`





export default function PostRead(props) {

    const { loading, error, data } = useQuery(POST_QUERY); 

    if (loading) return <p>Loading Posts...</p>;
    if (error) return <p>Something wrong happened!</p>;

        return (
            <>

            
            </>
        )
}
