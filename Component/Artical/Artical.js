'use strict'

import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/link';
import TriggerMenu from "./Menu";
import SvgIcon from '@material-ui/core/SvgIcon';



// import EyesIcon from '../asset/eyes.svg';
// import DotsIcon from '../asset/dots.svg';

import style from '../css/Artical.module.scss';


export default class Artical extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }


    onClickHander = () => {
        this.setState({ show: !this.state.show })

    };


    handleClose = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <Grid className={style.grid} container  >
                <Grid item sm={6} md={6} lg={6} xs={12}>
                    <Card className={style.card}>
                        <CardActionArea>
                                <CardMedia
                                    className={style.image}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    image="https://source.unsplash.com/random"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">       
                                        <Link href="/read">
                                        <a> Lizard </a> 
                                        </Link>
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions  style={{'justifyContent': 'space-between' ,padding:'2px'}}>
                            <div className={style.views}>
                                <SvgIcon width="48" height="48" viewBox="0 0 48 48" className={style.iconEyes}>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M39.6594 23.05C34.5637 17.1 29.1652 14 24.0189 14C18.8727 14 13.4742 17.1 8.3784 23.05C7.87387 23.6 7.87387 24.45 8.3784 25C13.4742 30.9 18.8727 34 24.0189 34C29.1652 34 34.5637 30.9 39.6594 24.95C40.1135 24.4 40.1135 23.6 39.6594 23.05ZM24.0189 32C19.6295 32 14.7355 29.15 10.1947 24C14.7355 18.85 19.6295 16 24.0189 16C28.4084 16 33.3023 18.85 37.8431 24C33.3023 29.15 28.4084 32 24.0189 32ZM24.0189 18C20.689 18 17.9645 20.7 17.9645 24C17.9645 27.3 20.689 30 24.0189 30C27.3488 30 30.0733 27.3 30.0733 24C30.0733 20.7 27.3488 18 24.0189 18ZM24.0189 28C21.799 28 19.9827 26.2 19.9827 24C19.9827 21.8 21.799 20 24.0189 20C26.2389 20 28.0552 21.8 28.0552 24C28.0552 26.2 26.2389 28 24.0189 28Z" fill="black"/>
                                </SvgIcon>
                                <h3 title="Views" >41k</h3>
                            </div>
                              <TriggerMenu/>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={6} md={6} lg={6} xs={12}>
                    <Card className={style.card}>
                        <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    className={style.image}
                                    image="https://source.unsplash.com/random"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">       
                                        <Link href="/read">
                                        <a> Lizard </a> 
                                        </Link>
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                        <CardActions style={{'justifyContent': 'space-between',padding:'2px'}}>
                            <div className={style.views}>
                                <SvgIcon width="48" height="48" viewBox="0 0 48 48" className={style.iconEyes}>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M39.6594 23.05C34.5637 17.1 29.1652 14 24.0189 14C18.8727 14 13.4742 17.1 8.3784 23.05C7.87387 23.6 7.87387 24.45 8.3784 25C13.4742 30.9 18.8727 34 24.0189 34C29.1652 34 34.5637 30.9 39.6594 24.95C40.1135 24.4 40.1135 23.6 39.6594 23.05ZM24.0189 32C19.6295 32 14.7355 29.15 10.1947 24C14.7355 18.85 19.6295 16 24.0189 16C28.4084 16 33.3023 18.85 37.8431 24C33.3023 29.15 28.4084 32 24.0189 32ZM24.0189 18C20.689 18 17.9645 20.7 17.9645 24C17.9645 27.3 20.689 30 24.0189 30C27.3488 30 30.0733 27.3 30.0733 24C30.0733 20.7 27.3488 18 24.0189 18ZM24.0189 28C21.799 28 19.9827 26.2 19.9827 24C19.9827 21.8 21.799 20 24.0189 20C26.2389 20 28.0552 21.8 28.0552 24C28.0552 26.2 26.2389 28 24.0189 28Z" fill="black"/>
                                </SvgIcon>
                                <h3 title="Views" >41k</h3>
                            </div>

                           <TriggerMenu/>

                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}
