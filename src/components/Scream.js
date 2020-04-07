import React,{Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import MyButton from '../utils/MyButton';
import DeleteScream from '../components/DeleteScream'
//MUI Stuffffsss
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import relativeTime from 'dayjs/plugin/relativeTime'
// import {getScreams} from '../redux/actions/dataActions';

import {likeScream,unlikeScream} from '../redux/action/dataAction';

import ChatIcon from '@material-ui/icons/Chat'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite';
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
                commentCount
            },
            user:{
                authenticated,
                credentials: { handle }
            }
        }=this.props
        // const {classes,scream:{body,userImage,userHandle,screamId,likeCount,commentCount}} =this.props;
        //console.log(body);
        // const scream=this.props.scream;
        const likeButton=!authenticated?(
            <MyButton tip='Like'>
                <Link to='/login'>
                    <FavoriteBorder color='primary'/>
                </Link>
            </MyButton>
        ):(
            this.likedScream()?(
                <MyButton tip="Unlike" onClick={this.unlikeScream}>
                    <FavoriteIcon color='primary'/>
                </MyButton>
            ):(
                <MyButton tip="Like" onClick={this.likeScream}>
                <FavoriteBorder color='primary'/>
            </MyButton>
            )
        )
        console.log(userHandle)
        console.log(handle);
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
                    <Typography variant="h5" component={Link} color="primary">{userHandle}</Typography>
                    {deleteButton}
                    <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                    <Typography variant="body1">{body}</Typography>
                    {likeButton}
                    <span>{likeCount}</span>
                    <MyButton tip="commens">
                        <ChatIcon color="primary"/>
                    </MyButton>
                    <span>{commentCount}</span>
                </CardContent>
            </Card>
        )
    }
}
Scream.propTypes={
    likeScream:PropTypes.func.isRequired,
    unlikeScream:PropTypes.func.isRequired,
    user:PropTypes.object.isRequired,
    scream:PropTypes.object.isRequired,
    classes:PropTypes.object.isRequired
}
const mapStateToProp=state=>({
    user:state.user
})
const mapActionsToProps={
    likeScream,
    unlikeScream
}
export default connect(mapStateToProp,mapActionsToProps)(withStyles(styles)(Scream));