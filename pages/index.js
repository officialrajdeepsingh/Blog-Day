
import React, { Component } from 'react';
import Layout from '../Component/Layout'
import MainSection from '../Component/MainSection/MainSection'
import Artical from '../Component/Artical/Artical'
import Pagination from '../Component/Pagination/Pagination'

import Myapp from './_app.js';

export default class index extends Component {
  render() {
    return (
      <> 
        <Layout>
          <MainSection />
          <Artical />
          <Pagination />
        </Layout>
      </>
    )
  }
}

