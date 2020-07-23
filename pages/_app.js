// global css 
import '../Component/css/style.scss'
import '../Component/css/reactMde.scss'

// import Apollo Client
import {client} from "../Component/apollo-client";

// import  Apollo provider
import { ApolloProvider } from "@apollo/react-hooks";

// Layout Component
import Layout from '../Component/Layout'


import Router from "next/router";
import withGA from "next-ga";

import { SocialProfileJsonLd } from 'next-seo';

function MyApp({Component, pageProps }) {

 return (
   <>
   <SocialProfileJsonLd
     type="Person"
     name="Rajdeep Singh"
     url="https://www.rajdeepsingh.dev/"
      sameAs={[
        'https://twitter.com/Official_R_deep',
        'https://www.facebook.com/officialrajdeepsingh/',
        'https://www.instagram.com/officialrajdeepsinghs/',
      ]}
    />

   <ApolloProvider client={client}> 
     <Layout>
          <Component {...pageProps} />
     </Layout>
   </ApolloProvider>
    </>
  )
}

// metric
// export function reportWebVitals(metric) {
//    if (metric.label === 'custom') {
//  }
// }

export default withGA("UA-173126339-1", Router)(MyApp);
