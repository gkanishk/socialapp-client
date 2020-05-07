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
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress'

//Redux
import {connect} from 'react-redux';
import {loginUser} from '../redux/action/userAction';

    const theme = createMuiTheme({
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

class login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            errors:{}
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({errors:nextProps.UI.errors} );
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        // this.setState({
        //     loading:true
        // });
        const userData={
            email:this.state.email,
            password:this.state.password
        };
        this.props.loginUser(userData,this.props.history);
        
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
                    Login
                </Typography>
                <form noValidate onSubmit={this.handleSubmit}>
                    
                <ThemeProvider theme={theme}>
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
                </ThemeProvider>
                {errors.general && (
                    <Typography variant="body2" className={classes.customError}>
                        {errors.general}
                    </Typography>
                )} 
                    <Button type="submit" variant="contained" color="primary" label="Submit" className={classes.Button} disabled={loading}>
                        login
                {loading &&(
                    <CircularProgress size={30} className={classes.progress}/>
                )}</Button><br/>
                    <small>
                        Dont have an account ? sign up <Link to="/signup">here</Link>
                    </small>
                </form>

            </Grid>
            <Grid item sm/>

        </Grid>
        )
    }
}
login.propTypes={
    classes:PropTypes.object.isRequired,
    loginUser:PropTypes.func.isRequired,
    user:PropTypes.object.isRequired,
    UI:PropTypes.object.isRequired
};

const mapStateToProps=(state)=>({
user:state.user,
UI:state.UI 
})
const mapActionToProps={
loginUser
}
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(login));