import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Scream from "../components/scream/Scream";
import Profile from '../components/profile/Profile';
//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import AppIcon from '../images/icon.png'
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getScreams} from '../redux/action/dataAction'
const styles={
    card:{
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
class home extends Component{
    // state={
    //     screams:null
    // }
    componentDidMount(){
        // axios.get('/screams')
        // .then(res=>{
            
        //     this.setState({
        //         screams:res.data 
        //     })
        //     console.log(this.state.screams)
        // }).catch(err=>console.error(err));
        this.props.getScreams();
    }
    render()
    {   
        const {screams,loading}=this.props.data;
        const classes=this.props
        let recentScreamsMarkup=!loading 
        ? 
        (screams.map((scream)=><Scream key={scream.screamId} scream={scream}/>))
        :
        <Card className={classes.card}>
                <CardMedia
                image={AppIcon}
                title="Profile image" 
                className={classes.image} />
                <CardContent className={classes.content}>
                    <Typography variant="h5"  color="primary">Loading...</Typography>
                    <Typography variant="body2" color="textSecondary">Loading...</Typography>
                    <Typography variant="body1">Loading...</Typography>

                </CardContent>
            </Card>
        return (
        <Grid container spacing={10}>
            <Grid item sm={8} xs={12}>
                {recentScreamsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                <Profile />
            </Grid>
        </Grid>
    
        )
    };
}

home.propTypes={
    getStreams:PropTypes.func.isRequired,
    data:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    data:state.data
})
export default connect(mapStateToProps,{getScreams})(withStyles(styles)(home));