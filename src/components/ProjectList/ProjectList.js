import React, { Component } from 'react';
import { connect } from 'react-redux';

//----Components----
import ProjectListItem from '../ProjectListItem/ProjectListItem'
import Header from '../Header/Header';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//----Styling----
const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 6,
    },
});


class ProjectList extends Component {

    //Gets project info from the database to be used to display information Cards to the project page
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_PROJECTS' });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="App">
                <Header />
                <Grid container className={classes.root} direction="column" justify="center" alignItems="center" spacing={24}>
                    {this.props.reduxState.projects.map(project => {
                        return <ProjectListItem key={project.project_id} project={project} />
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