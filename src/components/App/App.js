import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import ProjectList from '../ProjectList/ProjectList';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={ProjectList} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);