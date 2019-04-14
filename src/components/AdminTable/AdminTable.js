import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTableItem from '../AdminTableItem/AdminTableItem';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 8,
      overflowX: 'auto',
    },
    table: {
        width: 800,
      minWidth: 350,
    },
  });


class AdminTable extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PROJECTS' });
    }
  
  render() {
    const { classes } = this.props;
    return (
        <Grid container justify="center" alignItems="center" direction="column">
        <Grid item xs={12}>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Project Name</TableCell>
                            <TableCell >Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.projects.map( project => {
                            return <AdminTableItem key={project.project_id} project={project} />
                        })}
                    </TableBody>
                </Table>
            </Paper>
            </Grid>
        </Grid>
    );
  }
}

AdminTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(AdminTable));