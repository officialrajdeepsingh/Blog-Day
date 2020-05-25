import React, { Component } from 'react'
import PaginationCard from '@material-ui/lab/Pagination';

import style from "../css/Pagination.module.scss";


export default class Pagination extends Component {
  render() {
    return (
    <div className={style.PaginationRoot }>
           <PaginationCard classes={{ ul : style.paginationul}} showFirstButton={false} variant="outlined" shape="rounded" hidePrevButton={false} hideNextButton={false} showLastButton={false} count={5} color="primary" />
    </div>
  


    )
  }
}
