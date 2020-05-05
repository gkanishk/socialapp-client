import React,{Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import MyButton from '../../utils/MyButton';
import DeleteScream from './DeleteScream'
import ScreamDialog from './ScreamDialog';
import LikeButton from './LikeButton';
//MUI Stuffffsss
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import relativeTime from 'dayjs/plugin/relativeTime'

import ChatIcon from '@material-ui/icons/Chat'

const styles={
card:{
    position:'relative',
    display:'flex',
    marginBottom:20

},
image:{
    minWidth:200
},
content:{
    padding:25,
    objectFit:'cover'
}}
class Scream extends Component{
    likedScream=()=>{
        if(this.props.user.likes&&this.props.user.likes.find(like=>like.screamId===this.props.scream.screamId))
        return true;
        else
        return false;
    };
    likeScream=()=>{
        this.props.likeScream(this.props.scream.screamId);
    }
    unlikeScream=()=>{
        this.props.unlikeScream(this.props.scream.screamId);
    }
    render()
    {
        dayjs.extend(relativeTime)
        const {classes,
            scream:{body,
                createdAt,
                userImage,
                userHandle,
                screamId,
                likeCount,
                commentCount,comments
            },
            user:{
                authenticated,
                credentials: { handle }
            }
        }=this.props
        // const {classes,scream:{body,userImage,userHandle,screamId,likeCount,commentCount}} =this.props;
        //console.log(body);
        // const scream=this.props.scream
        console.log(comments)
        // console.log(handle);
        // console.log(comments)
        const deleteButton = authenticated && userHandle === handle ?
        (
            <DeleteScream screamId={screamId}/>
        ):null;
        return(
            <Card className={classes.card}>
                <CardMedia
                image={userImage}
                title="Profile image" className={classes.image}/>
                <CardContent className={classes.content}>
                    <Typography variant="h5" component={Link} to={`/users/${userHandle}`}color="primary">{userHandle}</Typography>
                    {deleteButton}
                    <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                    <Typography variant="body1">{body}</Typography>
                    <LikeButton screamId={screamId}/>
                    <span>{likeCount}</span>
                    <MyButton tip="comments">
                        <ChatIcon color="primary"/>
                    </MyButton>
                    <span>{commentCount}</span>
                    <ScreamDialog screamId={screamId} userHandle={userHandle}/>
                </CardContent>
            </Card>
        )
    }
}
Scream.propTypes={
    user:PropTypes.object.isRequired,
    scream:PropTypes.object.isRequired,
    classes:PropTypes.object.isRequired
}
const mapStateToProp=state=>({
    user:state.user
})

export default connect(mapStateToProp)(withStyles(styles)(Scream));