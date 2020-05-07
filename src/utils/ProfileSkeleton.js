import React from 'react';
import PropTypes from 'prop-types';
import Imge from '../images/image.png';
import Paper from '@material-ui/core/Paper';
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/CalendarToday';
import CalendarToday from '@material-ui/icons/CalendarToday'


const ProfileSkeleton=(props)=> {
    const {classes}=props;
    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div classesName="image-wrapper">
                    <img src={Imge} alt="profile" className="profile-image"/>
                </div>
                <hr/>
                <div className="profile-details">
                    <div className={classes.handle}/>
                    <hr/>
                    <div className={classes.fullLine}/>
                    <div className={classes.fullLine}/>
                    <hr/>
                    <LocationOn color="primary"/><span>Location</span>
                    <hr/>
                    <LinkIcon color="primary"/>https://test.com
                    <hr/>
                    <CalendarToday color="primary"/>Joined Date
                </div>
            </div>
        </Paper>

    )
}
ProfileSkeleton.propTypes={
    classes:PropTypes.object.isRequired
}

export default ProfileSkeleton
