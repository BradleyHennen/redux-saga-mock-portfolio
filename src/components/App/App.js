import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//----Material-UI----
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

//----Components----
import './App.css';
import ProjectList from '../ProjectList/ProjectList';
import Admin from '../Admin/Admin';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Route exact path='/' component={ProjectList} />
            <Route exact path='/admin' component={Admin} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);