import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Scream from "../components/scream/Scream";
import Profile from '../components/profile/Profile';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getScreams} from '../redux/action/dataAction';
import ScreamSkeleton from '../utils/ScreamSkeleton';
import ProfileSkeleton from '../utils/ProfileSkeleton';
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
    componentDidMount(){
        this.props.getScreams();
    }
    render()
    {   
        const {screams,loading}=this.props.data;
        // const classes=this.props
        let recentScreamsMarkup=!loading 
        ? 
        (screams.map((scream)=>
        <Scream key={scream.screamId} scream={scream}/>
    ))
        :
        <ScreamSkeleton/>
        return (
        <Grid container spacing={10}>
            <Grid item sm={8} xs={12}>
                {recentScreamsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                {!loading?<Profile />:<ProfileSkeleton/>}
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