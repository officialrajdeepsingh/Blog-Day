// global css 
import '../Component/css/style.scss'
import '../Component/css/reactMde.scss'

// import Apollo Client
import {client} from "../Component/apollo-client";

// import  Apollo provider
import { ApolloProvider } from "@apollo/react-hooks";

// Layout Component
import Layout from '../Component/Layout'

export default function MyApp({Component, pageProps }) {

 return (
   <ApolloProvider client={client}> 
     <Layout>
          <Component {...pageProps} />
     </Layout>
   </ApolloProvider>

  )
}

// export function reportWebVitals(metric) {
//   console.log(metric , ' out metric') // The metric object ({ id, name, startTime, value, label }) is logged to the console
//   if (metric.label === 'custom') {
//     console.log(metric , 'inside metric') // The metric object ({ id, name, startTime, value, label }) is logged to the console
//   }
// }


