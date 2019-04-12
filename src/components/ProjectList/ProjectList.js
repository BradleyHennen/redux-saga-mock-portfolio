import React, { Component } from 'react';
import ProjectListItem from '../ProjectListItem/ProjectListItem'

class ProjectList extends Component {
  
  render() {
    return (
      <div className="App">
        <h2>Project List</h2>
        <ProjectListItem />
      </div>
    );
  }
}

export default ProjectList;