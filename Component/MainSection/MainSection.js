import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import style from "../css/MainSection.module.scss";

export default class MainSection extends Component {
   
    constructor(props) {
        super(props);
        this.state = { height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({  height: window.innerHeight - 130 });
      }   
      
    
    render() {
        
        return (
                     
                 <Container  style={( this.state.height <= 799)? { height:'100%' , position: 'relative',backgroundColor:'white', margin:"30px 0px", boxShadow:'0px 4px 9px 3px rgba(0, 0, 0, 0.11), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0.12)'} : { height:`${this.state.height}px` , position: 'relative',backgroundColor:'white', margin:"30px 0px", boxShadow:'0px 4px 9px 3px rgba(0, 0, 0, 0.11), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0.12)'} } > 

                    <Card className={style.root}>
                        <div className={style.innerCard}>
                            <div className={style.details}>
                                <CardContent className={style.cardContentInner}>
                                    <Typography component="h6" variant="h6">
                                        Bootstrap
                                    </Typography>
                                    <Typography component="h4" variant="h4">
                                        Live From Space
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions className={style.cardAction}>
                                    <Button className={style.productButton} size="small">
                                        Read More
                                    </Button>
                                </CardActions>
                            </div>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                image='https://source.unsplash.com/random'
                                title="Live from space album cover"
                                className={style.cardImage}
                            />

                        </div>
                    </Card>

                    <div className={style.iconBar}>
                        <IconButton aria-label="Facebook" >
                                <FacebookIcon style={{ color: 'black' }}/>
                            </IconButton>
                        <IconButton aria-label="Twitter">
                                <TwitterIcon style={{ color: 'black' }} />
                        </IconButton>
                        <IconButton aria-label="Instagram">
                                <InstagramIcon style={{ color: 'black' }} />
                        </IconButton>
                    </div>
                
                </Container>
        )
    }
}
