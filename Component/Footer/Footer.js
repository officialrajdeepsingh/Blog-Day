import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import SvgIcon from '@material-ui/core/SvgIcon';
import InstagramIcon from '@material-ui/icons/Instagram';
import { request } from 'graphql-request'
import useSWR from 'swr'
import logo from '../asset/logo.svg'
import style from '../css/Footer.module.scss';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import POST_FOOTER from "../graphalQurey"

const fetcher = query => request('https://www.rajdeepsingh.dev/graphql', query)



export default function Footer(props) {
    const { data, error } = useSWR(
        POST_FOOTER,
        fetcher
      )

    return (
        <footer className={style.appbar} position="static">
            <Toolbar component='div' className={style.toolbar}>

                <Link href="/">
                    
                    <img className={style.logo} alt="Rajdeep Singh --Learn With Me" src={logo}/> 
                  
                </Link>
            
                <ul className={style.nav}>          
                        {
                            (data)? data.menu.menuItems.nodes.map(
                                menu=>{
                                    const slug=menu.connectedObject.slug 
                                    const id =menu.connectedObject.id  
                                    const url= menu.url
                                    const label= menu.label                                   
                                    return (
                                        <li key={menu.id} className={style.navItem}>
                                            <Link  href={(slug && id )?`/Page/${slug}-${id}` : url }>
                                                <a title={(menu.connectedObject.title)?menu.connectedObject.title : label }>{menu.label}</a>
                                            </Link>
                                        </li>      
                                    )
                                }
                            ) : ""
                        } 
                    </ul>
                
            </Toolbar>
            

            <Toolbar component='div' className={style.toolbarCopyright}>

                <h2 className={style.copyright}>@ Copyright by Rajdeep Singh</h2>
               <div>
                    <IconButton target="_blank" href='https://www.facebook.com/officialrajdeepsingh/' aria-label="Facebook" >
                        <FacebookIcon className={style.socialIcon}/>
                    </IconButton>
                    <IconButton target="_blank" href='https://twitter.com/Official_R_deep' aria-label="Twitter">
                        <TwitterIcon className={style.socialIcon} />
                    </IconButton>
                    <IconButton target="_blank" href='https://www.instagram.com/officialrajdeepsinghs/' aria-label="Instagram">
                            <InstagramIcon className={style.socialIcon} />
                    </IconButton>
                    <IconButton target="_blank" href='https://medium.com/@officialrajdeepsingh'  aria-label="Medium">
                            <SvgIcon width="24" height="24" fill="black"    htmlColor="black" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" >
                                <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"/>
                            </SvgIcon>
                    </IconButton>
                </div>
            </Toolbar>

        </footer>
    )
}

