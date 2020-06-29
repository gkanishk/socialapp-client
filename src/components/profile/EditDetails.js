import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import {connect} from 'react-redux';
import {editUserDetails} from '../../redux/action/userAction' 
import {TextField } from '@material-ui/core';

//Dialog
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit'
import MyButton from '../../utils/MyButton'
const styles=(theme)=>({
    // ...theme,
    button:{
        float:"right"
    }
})
class EditDetails extends Component{
    state={
        bio:'',
        website:'',
        location:'',
        open:false
    };
    mapUserDetailsToState=(credentials)=>{
        this.setState({
            bio:credentials.bio ? credentials.bio:'',
            website:credentials.website ? credentials.website:'',
            location:credentials.location ? credentials.location:''
        });
    }
        handleOpen=()=>{
            this.setState({
                open:true
            })
            this.mapUserDetailsToState(this.props.credentials);
        }
        handleClose=()=>{
            this.setState({open:false});
        }
        componentDidMount(){
            const {credentials}=this.props;
            this.mapUserDetailsToState(credentials);
        }

        handleChange=(event)=>{
            this.setState({
                [event.target.name]:event.target.value
            })
        }
        handleSubmit=()=>{
            const userDetails={
                bio:this.state.bio,
                website:this.state.website,
                location:this.state.location
            };
            console.log(userDetails);
            this.props.editUserDetails(userDetails);
            this.handleClose();
        }
    render()
    {
        const {classes}=this.props;
        return (
            <Fragment>
            <MyButton tip="Edit user details" onClick={this.handleOpen} btnClassName={classes.button}>
                <EditIcon color='primary'/>
            </MyButton>
                <Dialog 
                open={this.state.open}
                onClose={this.handleClose}
                fullWidth
                maxWidth="sm">
                    <DialogTitle>Edit details</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField
                            name="bio"
                            type="text"
                            label="Bio"
                            multiline
                            rows="3"
                            placeholder="A short bio apne bare mein"
                            className={classes.textField}
                            value={this.state.bio}
                            onChange={this.handleChange}
                            fullWidth
                            variant="outlined"
                            /><hr/>
                            <TextField
                            name="website"
                            type="text"
                            label="Website"
                            placeholder="Enter your personel website"
                            className={classes.textField}
                            value={this.state.website}
                            onChange={this.handleChange}
                            fullWidth
                            variant="outlined"
                            />
                            <hr/>
                            <TextField
                            name="location"
                            type="text"
                            label="Location"
                            placeholder="Enter Location"
                            className={classes.textField}
                            value={this.state.location}
                            onChange={this.handleChange}
                            fullWidth
                            variant="outlined"
                            />

                            
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

EditDetails.propTypes={
    editUserDetails:PropTypes.func.isRequired,
    classes:PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
    credentials:state.user.credentials
})

export default connect(mapStateToProps,{editUserDetails})(withStyles(styles)(EditDetails));







