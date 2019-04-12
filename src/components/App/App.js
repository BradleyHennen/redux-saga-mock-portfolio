import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import ProjectList from '../ProjectList/ProjectList'
import Header from '../Header/Header'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={ProjectList} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);