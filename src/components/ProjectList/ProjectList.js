import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectListItem from '../ProjectListItem/ProjectListItem'
import Header from '../Header/Header';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
  });

class ProjectList extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_PROJECTS' });
    }

    render() {
        // const { classes } = this.props;

        return (
            <div className="App">
                <Header />
                <h2>Project List</h2>
                <Grid container direction="column"  justify="center" alignItems="center" spacing={24}>
                    {this.props.reduxState.projects.map(project => {
                        return <ProjectListItem key={project.id} project={project} />
                    })}
                </Grid>
            </div>
        );
    }
}

ProjectList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(ProjectList));