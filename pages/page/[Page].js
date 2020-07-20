import React, { Component,Fragment  } from 'react'
// next Head Commponent
import Head from 'next/head'
// apollo clents
import {client} from "../../Component/apollo-client";
// material Typography 
import Typography from '@material-ui/core/Typography';
// SCSS
import style from "../../Component/css/Page.module.scss";

// graphql Scama 
import {PAGE_QUERY} from "../../Component/graphalQurey"

// next Seo
import { NextSeo } from 'next-seo';
// custom Error Component
import ErrorComponent from '../../Component/ErrorComponent'

// class Base
export default class page extends Component {

    // use getInitialProps For Get Data

    static async getInitialProps({query,res}) {

        const id = query.Page.split( '-' ).pop() ;  
      
       try {
           // fatch data With query
          const getData= await client.query(({
              query:PAGE_QUERY,
              variables:{id}
          }))

          // return data
           return {getData}          
        }
        catch(error){     
              const concerter= JSON.stringify(error)
            return {concerter}
        }
    }

    render() {
        const {getData , concerter}=this.props
        
        if (concerter) {
            return <ErrorComponent concerter={concerter}/>
        }
        else{
            return (
                // react Fragmet
            <Fragment >
                  <NextSeo
                    title="page"
                    description="title"
                 />

                {/* // Next Head Component */}
                <Head> 
                    <link rel='stylesheet' id='wp-block-library-css'  href='https://www.rajdeepsingh.dev/wp-includes/css/dist/block-library/style.min.css?ver=5.4.2' media='all' />
                    <link rel='stylesheet' id='wp-block-library-theme-css'  href='https://www.rajdeepsingh.dev/wp-includes/css/dist/block-library/theme.min.css?ver=5.4.2' media='all' />
                </Head>
                
                    <div className={style.page}> 
                       <Typography component="h1" variant="h1" className={style.pageHeading} dangerouslySetInnerHTML={{ __html: getData.data.page.title }}>
                        </Typography>           
                    <div  className={style.pageStyle}  dangerouslySetInnerHTML={{ __html: getData.data.page.content }}></div> 
                    </div>
            </Fragment >
        )}
    
    }
}
