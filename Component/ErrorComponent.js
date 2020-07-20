import React,{Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import style from './css/Error.module.scss'
import { NextSeo } from 'next-seo';
import Link from 'next/link';

function ErrorComponent(props) {

  
    return (
        <Fragment >
         <NextSeo
                    title="404 Not Found"
                    description="Something Worng "
                    noindex={ true}
                    nofollow={true}
                /> 
        <div className={style.customError}>
        <Typography className={style.heading} component="h1" variant="h1"> 404 Some Thing Worng </Typography> 
        <p className={style.paragraf}>  { props? JSON.parse(props.concerter).message : ""}</p>
        <Link href="/"> 
            <a className={style.customeHome}> Home</a>
        </Link>
      </div>
      </Fragment >
    )
  }

  export default ErrorComponent