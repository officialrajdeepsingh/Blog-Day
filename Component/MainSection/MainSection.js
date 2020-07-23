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
import SvgIcon from '@material-ui/core/SvgIcon';
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
             
        return (

                     
                 <Container  style={( this.state.height <= 799)? { height:'100%' , position: 'relative',backgroundColor:'white', margin:"40px 0px", boxShadow:'0px 4px 9px 3px rgba(0, 0, 0, 0.11), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0.12)'} : { height:`${this.state.height}px` , position: 'relative',backgroundColor:'white', margin:"30px 0px", boxShadow:'0px 4px 9px 3px rgba(0, 0, 0, 0.11), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 0px 3px 0px rgba(0,0,0,0.12)'} } > 

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
                                    <Typography className={style.addFontH4} component="h4" variant="h4">
                                    {node.title}
                                    </Typography>
                                    <Typography variant="subtitle1" className={style.addFontSub} color="textSecondary" dangerouslySetInnerHTML={{ __html: node.excerpt }}>
                                       
                                    </Typography>
                                </CardContent>
                                <CardActions className={style.cardAction}>
                                    <Link    href={`/Blog/?slug=${node.id}`} as={ `/Blog/${node.slug}-${node.id}`}>
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
                        
                        <IconButton target="_blank" href='https://medium.com/@officialrajdeepsingh'  aria-label="Medium">
                            <SvgIcon width="24" height="24" fill="black"    htmlColor="black" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" >
                                <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"/>
                            </SvgIcon>
                        </IconButton>
                    </div>
                
                </Container>
        )
    }
}
