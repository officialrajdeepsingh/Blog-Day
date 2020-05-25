import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import style from '../css/Searchbar.module.scss';

export default class Searchbar extends Component {
    render() {
        return (
            <div className={style.bar}> 
             <Container className={style.box} maxWidth="sm" >
                <form className={style.formRoot} noValidate autoComplete="off">
                    <TextField id="standard-secondary" className={style.rootText} label="Search Here" />
                </form>
                {/* first List */}
                <List className={style.rootList}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={ 
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={style.inline}
                                        color="textPrimary"
                                    >
                                        Ali Connors
                                    </Typography>
                            
                            }
                        />
                    </ListItem>
                </List>
                <Divider variant="inset" component="li" />

                {/* second list */}
                <List className={style.rootList}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={ 
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={style.inline}
                                        color="textPrimary"
                                    >
                                        Ali Connors
                                    </Typography>
                            
                            }
                        />
                    </ListItem>
                </List>
                <Divider variant="inset" component="li" />
                {/* third list */}
                <List className={style.rootList}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={ 
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={style.inline}
                                        color="textPrimary"
                                    >
                                        Ali Connors
                                    </Typography>
                            
                            }
                        />
                    </ListItem>
                </List>
                <Divider variant="inset" component="li" />

                {/* forth list */}
                <List className={style.rootList}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={ 
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={style.inline}
                                        color="textPrimary"
                                    >
                                        Ali Connors
                                    </Typography>
                            
                            }
                        />
                    </ListItem>
                </List>
            </Container>
            </div>
        )
    }
}
