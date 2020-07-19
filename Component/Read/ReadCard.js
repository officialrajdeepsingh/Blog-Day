import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import style from '../css/Read.module.scss'
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'next/link';


export default class ReadCard extends Component {

    render() {
        const { post}=this.props
        return (
            <Grid key={post.id} item sm={12} md={6} lg={4} xs={12}>
                    <Card className={style.cardMore}>
                        <CardActionArea>
                                <CardMedia
                                    className={style.imageCardMore}
                                    component="img"
                                    alt={post.featuredImage.altText}
                                    image={post.featuredImage.sourceUrl}
                                    title={post.featuredImage.altText}
                                />
                                <CardContent>
                                    <Link href={`/[read]?id=${post.id}`} as={ `${post.slug}-${post.id}`}>
                                        <a className='MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom' dangerouslySetInnerHTML={{ __html: post.title }}>
                                        </a> 
                                    </Link>                
                                </CardContent>
                        </CardActionArea>
                </Card>
          </Grid>
        )
    }
}