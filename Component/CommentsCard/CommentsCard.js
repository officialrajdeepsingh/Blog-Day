import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import style from '../css/Comments.module.scss'

export default class CommentsCard extends Component {
    render() {
        const {data , reply  } = this.props
        return (
             <Card  className={ (reply)? style.cardCommentsReplyBox : style.cardCommentsBox }>
                                 <div dangerouslySetInnerHTML={{ __html: data.content }}></div>                 
                                  <div className={style.cardCommentBox}> 
                                     <Typography>
                                         By {data.author.name}
                                     </Typography>
                                     <Typography>
                                         Reaply
                                     </Typography>
                                 </div> 
                             </Card>

        )
    }
}
