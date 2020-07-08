import React from 'react';
import PropTypes from 'prop-types';
import Imge from '../images/image.png';
import Paper from '@material-ui/core/Paper';
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/CalendarToday';
import CalendarToday from '@material-ui/icons/CalendarToday';
import withStyles from '@material-ui/core/styles/withStyles';

const styles=(theme)=>({
    paper: {
        padding: 20
        },
        profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
            position: 'absolute',
            top: '80%',
            left: '70%'
            }
        },
        '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
            verticalAlign: 'middle'
            },
            '& a': {
            color: theme.palette.primary.main
            }
        },
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button': {
            '&:hover': {
            cursor: 'pointer'
            }
        }
        },
        fullLine:{
        height:15,
        width:'90%',
        marginBottom:8,
        backgroundColor:'rgba(0,0,0,0.6)',
        marginLeft:8
        },
        halfLine:{
            height:15,
            width:'50%',
            marginBottom:8,
            backgroundColor:'rgba(0,0,0,0.6)'
        },
})

const ProfileSkeleton=(props)=> {
    const {classes}=props;
    
    return (  
            <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className='image-wrapper'>
                    <img src={Imge} alt="profile" className='profile-image' />
                </div>
                <hr/>
                <div className="profile-details">
                    <div className={classes.handle}/>
                    <hr/>
                    <div className={classes.fullLine}/>
                    <hr/>
                    <LocationOn color="primary"/>
                    <span>Location</span>
                    <hr/>
                    <LinkIcon color="primary"/>
                    https://test.com/
                    <hr/>
                    <CalendarToday color="primary"/>
                    Joined Date
                </div>
            </div>
        </Paper>
    )
    
}
ProfileSkeleton.propTypes={
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileSkeleton)
