
import '../Component/css/style.scss'
import '../Component/css/reactMde.scss'

import {client} from "../Component/apollo-client";

import POST_HEADER from "../Component/graphalQurey"
import { ApolloProvider } from "@apollo/react-hooks";
import Layout from '../Component/Layout'

export default function MyApp({ Component, pageProps }) {
 return (
   <ApolloProvider client={client}> 
     <Layout  >
          <Component {...pageProps} />

     </Layout>
   </ApolloProvider>

  )
}

// MyApp.getInitialProps =  async ()=> {     
//       const getMenu= await client.query(({
//           query:POST_HEADER    
//       }))   
//             return  { getMenu }     
// }

