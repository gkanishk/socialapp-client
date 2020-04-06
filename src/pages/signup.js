import React,{Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles'

import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography"
import AppIcon from '../images/icon.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';

// import axios from 'axios';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'

import {connect} from 'react-redux';
import {signupUser} from '../redux/action/userAction';

const styles={
    form:{
        textAlign:'center'
    },
    pageTitle:{
        margin:'10px auto 10px auto'
    },
    image:{
        margin: '20px auto 20px auto'
    },
    textField:{
        margin:'10px auto 10px auto'
    },
    Button:{
        marginTop:10,
        position:'relative'
    },
    customError:
    {
        color:'red',
        fontSize:'0.8rem',
        marginTop: 10
    },
    progress:{
        position:'absolute'
    }
    }
const themes = createMuiTheme({
    overrides: {
    MuiFilledInput: {
        root: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,1)'
            }
        }
    }
    }
});
class signup extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            confirmPassword:'',
            handle:'',
            errors:{}
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({errors:nextProps.UI.errors} );
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            loading:true
        });
        const newuserData={
            email:this.state.email,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword,
            handle:this.state.handle
        };
        this.props.signupUser(newuserData,this.props.history);
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
        
    }

    render()
    {
        const {classes,UI:{loading}}=this.props;
        const {errors}=this.state;
        return (
        <Grid container className={classes.form}>
            <Grid item sm/>
            <Grid item sm>
                <img src={AppIcon} alt="iron bro" className={classes.image}/>
                <Typography variant="h3" className={classes.pageTitle}>
                    SignUp
                </Typography>
                <form noValidate onSubmit={this.handleSubmit}>
                    
                <ThemeProvider theme={themes}>
                <TextField 
                id="email" 
                name="email" 
                label="Email"
                type='email' 
                className={classes.textField}
                value={this.state.email}   
                onChange={this.handleChange} 
                fullWidth color='primary' 
                variant="outlined" 
                helperText={errors.email} 
                error={errors.email?true:false}>
                </TextField>
                <TextField 
                id="password" 
                type="password" 
                name="password" 
                label="Password" 
                className={classes.textField}
                value={this.state.password} 
                onChange={this.handleChange} 
                fullWidth variant="outlined" 
                helperText={errors.password} 
                error={errors.password?true:false} >
                </TextField>
                <TextField 
                id="confirmPassword" 
                type="password" 
                name="confirmPassword" 
                label="Confirm Password" 
                className={classes.textField}
                value={this.state.confirmPassword} 
                onChange={this.handleChange} 
                fullWidth variant="outlined" 
                helperText={errors.confirmPassword} 
                error={errors.confirmPassword?true:false} >
                </TextField>
                <TextField 
                id="handle" 
                type="text" 
                name="handle" 
                label="Handle" 
                className={classes.textField}
                value={this.state.handle} 
                onChange={this.handleChange} 
                fullWidth variant="outlined" 
                helperText={errors.handle} 
                error={errors.handle?true:false} >
                </TextField>
                </ThemeProvider>
                {errors.general && (
                    <Typography variant="body2" className={classes.customError}>
                        {errors.general}
                    </Typography>
                )} 
                    <Button type="submit" variant="contained" color="primary" label="Submit" className={classes.Button} disabled={loading}>
                        SignUp
                {loading &&(
                    <CircularProgress size={30} className={classes.progress}/>
                )}</Button><br/>
                    <small>
                        Already have an account ? login <Link to="/login">here</Link>
                    </small>
                </form>

            </Grid>
            <Grid item sm/>

        </Grid>
        )
    }
}
signup.propTypes={
    classes:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired,
    UI:PropTypes.object.isRequired,
    logoutUser:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({
    user:state.user,
    UI:state.UI
})

export default connect(mapStateToProps,{signupUser})(withStyles(styles)(signup));