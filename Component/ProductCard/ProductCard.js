import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';




import style from "../css/ProductCard.module.scss";



export default class ProductCard extends Component {

  
    render() {
        return (        
               
            <Card className={style.root}>
                    <div className={style.innerCard}>

                        <CardMedia
                            image='https://source.unsplash.com/random'
                            title="Live from space album cover"
                            className={style.cardImage}
                        />

                        <div className={style.details}>
                            <CardContent className={style.cardContentInner}>
                                <Typography component="h6" variant="h6">
                                    Free
                                </Typography>
                                <Typography component="h4" variant="h4">
                                    Live From Space
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    this is dec for products
                                </Typography>
                            </CardContent>
                            <CardActions className={style.cardAction}>
                                <Button className={style.productButton} size="small">
                                    Read More
                                </Button>
                                <Button className={style.productButton} size="small">
                                    Demo
                                </Button>
                            </CardActions>

                        </div>
                    </div>
                    </Card>

        )
    }
}
