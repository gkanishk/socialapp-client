import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
//import logo from './logo.svg';
import './App.css';
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
const theme=createMuiTheme({
  palette:{
    type:'dark',
    primary:{
light: "#7986cb",
main: "#ff5722",
dark: "#b23c17",
contrastText: "#fff"
    },
secondary:{
light: "#d04081",
main: "#c51162",
dark: "#890b44",
contrastText: "#fff"
}
  },typography:{
    useNextVariants:true
  }
})
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
      <Navbar/>
      <div className="container">
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/login" component={login}/>
        <Route exact path="/signup" component={signup}/>
      </Switch>
      </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
