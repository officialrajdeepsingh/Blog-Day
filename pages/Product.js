import React, { Component } from 'react';
import Productsection from '../Component/ProductCard/ProductCard'
import Layout from '../Component/Layout'
import Grid from '@material-ui/core/Grid';

export default class Product extends Component {
    render() {
        return (
                <Layout>
                    <Grid container  >
                        <Grid item sm={12} md={12} lg={12} xs={12}>

                          <Productsection />

                        </Grid>
                    </Grid>
                </Layout>
        )
    }
}
