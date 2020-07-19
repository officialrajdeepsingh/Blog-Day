import React, { Component } from 'react'
import gql from 'graphql-tag';
import Head from 'next/head'
import {client} from "../../Component/apollo-client";
import Typography from '@material-ui/core/Typography';



export default class page extends Component {

    static async getInitialProps({query}) {
        
        // const id = "cGFnZToy"; 
        const id =   query.Page.split( '-' ).pop() ;

        console.log(query, ' ctx query FORM QUERY ')
                
        const POST_QUERY = gql`query GET_POST($id: ID!) {
           
            page(id: $id) {
                content
                title
                featuredImage {
                  altText
                  sourceUrl(size: LARGE)
                  id
                }
              }
            
           }`
        
       try {
          const res= await client.query(({
              query:POST_QUERY,
              variables:{id}
          }))
          return { data: res}
        }
        catch(error){
          console.log(error)
        }
    
    }
    render() {
        
        const {data} = this.props;
        return (
            <>

                  <Typography component="h1" variant="h1" dangerouslySetInnerHTML={{ __html: data.data.page.title }}>
                      </Typography>           
                   <Typography component="div"  dangerouslySetInnerHTML={{ __html: data.data.page.content }}>
                    </Typography> 
            </>
        )
    }
}
