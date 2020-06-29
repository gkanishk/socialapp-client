import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import {connect} from 'react-redux';
import {TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close';
//Dialog
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyButton from '../../utils/MyButton';
import {postScream,clearErrors} from '../../redux/action/dataAction';

const styles={
    submitButton:{
        position:'relative',
        margin:"20px"
    },
    progressSpinner:{
        position:"relative"
    },
    closeButton:{
        position:'absolute',
        left:'90%',
        top:'10%'
    }
};
class PostScream extends Component{
    state={
        open:false,
        body:'',
        errors:{}
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({
                errors:nextProps.UI.errors
            });
        }
        if(!nextProps.UI.errors&&!nextProps.UI.loading){
            this.setState({body:'',open:false,errors:{}});
            // this.handleClose();
        }

    }
    handleOpen=()=>{
        this.setState({open:true})
    }
    handleClose=()=>{
        this.setState({open:false,errors:{}})
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.postScream({body:this.state.body});
    }
    render(){
        const {errors}=this.state;
        const {classes,UI:{loading}}=this.props;
        return (
            <Fragment>
                <MyButton onClick={this.handleOpen} tip="Post a message!">
                    <AddIcon color="secondary"/>
                </MyButton>
                <Dialog 
                open={this.state.open} onClose={this.handleClose} fullWidth="sm">
                    <MyButton tip="Close" onClick={this.handleClose} tipClassName={classes.closeButton}>
                        <CloseIcon color="secondary"/>
                    </MyButton>
                    <DialogTitle>Post a message!!</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                            name="body"
                            type="text"
                            label="Message Likha Jaye"
                            multiline
                            row="3"
                            placeholder="Scream at your aaageh"
                            error={errors.body?true:false}
                            className={classes.TextField}
                            onChange={this.handleChange}
                            fullWidth
                            />
                            <Button type="submit" variant="contained" color="primary"
                            className={classes.submitButton} disabled={loading}>
                                submit
                                {loading &&(
                                    <CircularProgress size={30} className={classes.progressSpinner}/>
                                )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }



}
PostScream.propTypes={
    postScream:PropTypes.func.isRequired,
    clearErrors:PropTypes.func.isRequired,
    UI:PropTypes.object.isRequired
};
const mapStateToProps=(state)=>({
    UI:state.UI
})

export default connect(mapStateToProps,{postScream,clearErrors})(withStyles(styles)(PostScream))