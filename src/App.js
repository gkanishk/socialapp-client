import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
//import logo from './logo.svg';
import './App.css';
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import user from './pages/user'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeFile from './utils/theme'
import jwtDecode from 'jwt-decode';
import AuthRoute from './utils/AuthRoute';
import {Provider} from 'react-redux';
import store from './redux/store';

import {SET_AUTHENTICATED}from './redux/types';
import {logoutUser,getUserData} from './redux/action/userAction';
import axios from 'axios';
const theme=createMuiTheme(themeFile);

axios.defaults.baseURL='https://asia-east2-socialapp-72822.cloudfunctions.net/api';

const token=localStorage.FBIdToken;

if(token){
const decodedToken=jwtDecode(token);
if(decodedToken.exp*1000 < Date.now()){
  window.location.href='/login';
  store.dispatch(logoutUser());
}
else{
  store.dispatch({type:SET_AUTHENTICATED});
  axios.defaults.headers.common['Authorization']=token;
  store.dispatch(getUserData());
}
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Provider store={store}>
    <Router>
      <Navbar/>
      <div className="container">
      <Switch>
        <Route exact path="/" component={home}/>
        <AuthRoute exact path="/login" component={login} />
        <AuthRoute exact path="/signup" component={signup}/>
        <Route exact path="/users/:handle" component={user}/>
        <Route exact path="/users/:handle/scream/:screamId" component={user}/>
      </Switch>
      </div>
      </Router>
    </Provider>
    </MuiThemeProvider>
  );
}

export default App;
