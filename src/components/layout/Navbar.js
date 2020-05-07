import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import PostScream from '../scream/PostScream';
//MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MyButton from "../../utils/MyButton"
import HomeIcon from "@material-ui/icons/Home"
import Notifications from './Notifications';
// import NotificationsIcon from '@material-ui/icons/Notifications';

class navbar extends Component{
    render()
    {
        const {authenticated} =this.props
        return (
            <AppBar>
                <Toolbar className="nav-container">
                {authenticated ?(
                    <Fragment>
                        <PostScream/>
                        <Link to="/">
                            <MyButton tip="Home">
                            <HomeIcon color="secondary"/>
                            </MyButton>
                        </Link>
                        <Notifications/>
                    </Fragment>
                ):
                (
                    <Fragment>
                    <Button color='inherit'component={Link} to='/login'>Login</Button>
                    <Button color='inherit'component={Link} to='/'>Home</Button>
                    <Button color='inherit'component={Link} to='/signup'>SignUp</Button>
                    </Fragment>
                )
                }
                </Toolbar>
            </AppBar>
        )
    }
}
navbar.propType={
    authenticated:PropTypes.bool.isRequired

}
const mapStateToProps=state=>({
    authenticated:state.user.authenticated
})
export default connect(mapStateToProps)(navbar);
