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

import Link from 'next/link';
import gql from 'graphql-tag';
import {client} from "../apollo-client";


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
        const {post}=this.props;     
        const {node}=post  
        console.log(node, ' main section ')
             
        return (
                     
                 <Container  style={( this.state.height <= 799)? { height:'100%' , position: 'relative',backgroundColor:'white', margin:"30px 0px", boxShadow:'0px 4px 9px 3px rgba(0, 0, 0, 0.11), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0.12)'} : { height:`${this.state.height}px` , position: 'relative',backgroundColor:'white', margin:"30px 0px", boxShadow:'0px 4px 9px 3px rgba(0, 0, 0, 0.11), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0.12)'} } > 

                    <Card className={style.root}>
                     <div className={style.innerCard}>
                            <div className={style.details}>
                                <CardContent className={style.cardContentInner}>
                                    {
                                        node.categories.nodes.map(
                                            (postCat)=>  <Typography key={postCat.id} component="h6" variant="h6">
                                            # {postCat.name} 
                                             </Typography>
                                        )
                                       
                                    }
                                    <Typography component="h4" variant="h4">
                                    {node.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" dangerouslySetInnerHTML={{ __html: node.excerpt }}>
                                       
                                    </Typography>
                                </CardContent>
                                <CardActions className={style.cardAction}>
                                    <Link    href={`/Blog/?slug=${node.id}-${node.slug}-${node.id}`} as={ `/Blog/${node.slug}-${node.id}`}>
                                       <a className={`MuiButtonBase-root MuiButton-root MuiButton-text  MuiButton-textSizeSmall MuiButton-sizeSmall ${style.productButton}`}> Read More </a> 
                                    </Link>
                                    
                                    
                                </CardActions>
                            </div>
                            <CardMedia
                                className={style.image}
                                component="img"
                                alt={node.featuredImage.altText}
                                image={node.featuredImage.sourceUrl}
                                title={node.featuredImage.altText}
                            />

                        </div> 

                    </Card>

                    <div className={style.iconBar}>
                        <IconButton  target="_blank" href='https://www.facebook.com/officialrajdeepsingh/' aria-label="Facebook" >
                                <FacebookIcon style={{ color: 'black' }}/>
                            </IconButton>
                        <IconButton  target="_blank" href='https://twitter.com/Official_R_deep' aria-label="Twitter">
                                <TwitterIcon style={{ color: 'black' }} />
                        </IconButton>
                        <IconButton target="_blank" href='https://www.instagram.com/officialrajdeepsinghs/' aria-label="Instagram">
                                <InstagramIcon style={{ color: 'black' }} />
                        </IconButton>
                    </div>
                
                </Container>
        )
    }
}
