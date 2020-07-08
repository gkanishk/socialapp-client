import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../utils/MyButton'
import dayjs from "dayjs";
import {Link} from 'react-router-dom';
import Comments from "./Comments";
import CommentForm from "./CommentForm";
//MUI mojo jojo

import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import UnfoldMore from "@material-ui/icons/UnfoldMore"
import LikeButton from './LikeButton';
import ChatIcon from '@material-ui/icons/Chat'

import {connect} from 'react-redux'
import {getScream,clearErrors} from '../../redux/action/dataAction'

const styles={
    invisibleSeperator:{
        border:'none',
        margin:4
    },
    profileImage:{
        width:200,
        height:200,
        borderRadius:'50%',
        objectFit:'cover'
    },
    dialogContent:{
        padding:20
    },
    closeButton:{
        position:'absolute',
        left:'90%',

    },
    expandButton:{
        position:'absolute',
        left:'90%'
    },
    spinnerDiv:{
        textAlign:'center',
        marginTop:50,
        marginBottom:50
    }

}
class ScreamDialog extends Component{
    state={
        open:false,
        oldPath:'',
        newPath:''
    };
    componentDidMount(){
        if(this.props.openDialog)
        {
            this.handleOpen();
        }
    }
    handleOpen=()=>{
        let oldPath=window.location.pathname;
        const {userHandle,screamId}=this.props;
        const newPath=`/users/${userHandle}/scream/${screamId}`;

        window.history.pushState(null,null,newPath);
        if(oldPath===newPath) oldPath=`/users/${userHandle}`;
        this.setState({open:true,oldPath,newPath});
        this.props.getScream(this.props.screamId);
    }
    handleClose=()=>{
        this.setState({open:false});
        this.props.clearErrors();
        window.history.pushState(null,null,this.state.oldPath);
    }
    render(){
        const {classes,
            scream:{screamId,
                body,
                createdAt,
                likeCount,
                commentCount,
                userImage,
                userHandle,
                comments},UI:{loading}}
        =this.props;
        const dialogMarkup=loading?(
        <div className={classes.spinnerDiv}>
            <CircularProgress size={200} />
        </div>
        ):
        (
            <Grid container spacing={16}>
                <Grid item sm={5}>
                    <img src={userImage} alt="Profile" className={classes.profileImage}/>
                </Grid>
                <Grid item sm={7}>
                    <Typography
                    component={Link}
                    color="primary"
                    varient="h5"
                    to={`/users/${userHandle}`}>
                        @{userHandle}
                    </Typography>
                    <hr className={classes.invisibleSeperator}/>
                    <Typography varient="body2" color="textSecondary">
                        {dayjs(createdAt).format('h:mm z, MMMM DD YYYY')}
                    </Typography>
                    <hr className={classes.invisibleSeperator}/>
                    <Typography varient="body1">{body}</Typography>
                    <LikeButton screamId={screamId}/>
                    <span>{likeCount}</span>
                    <MyButton tip="commens">
                        <ChatIcon color="primary"/>
                    </MyButton>
                    <span>{commentCount} comments</span>
                </Grid>
                <hr className={classes.visibleSeparator}/>
                <CommentForm screamId={screamId} />
                <Comments comments={comments}/>
            </Grid>
        );
        return(
            <Fragment>
                <MyButton onClick={this.handleOpen} tip="Expand scream" tipClassName={classes.expandButton}>
                    <UnfoldMore color="primary"/>
                </MyButton>
                <Dialog 
                open={this.state.open} onClose={this.handleClose} fullWidth="sm">
                    <MyButton tip="Close" onClick={this.handleClose} tipClassName={classes.closeButton}>
                        <CloseIcon color="secondary"/>
                    </MyButton>
                    <DialogContent className={classes.dialogContent}>
                        {dialogMarkup}
                    </DialogContent>
                    </Dialog>
            </Fragment>
    )
    }

}

ScreamDialog.propTypes={
    clearErrors: PropTypes.func.isRequired,
    getScream:PropTypes.func.isRequired,
    screamId:PropTypes.string.isRequired,
    userHandle:PropTypes.string.isRequired,
    scream:PropTypes.object.isRequired,
    UI:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
    scream:state.data.scream,
    UI:state.UI
})
const mapActionsToProps={
    getScream,clearErrors
};
export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(ScreamDialog));