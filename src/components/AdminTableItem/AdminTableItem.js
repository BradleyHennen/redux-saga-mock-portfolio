import React, { Component } from 'react';
import { connect } from 'react-redux';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';



const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});


class AdminTable extends Component {

    handleClick = (event) => {
        console.log('Delete ID', event.target.value);
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: event.target.value })
        this.props.dispatch({ type: 'GET_PROJECTS'})
    }


    render() {
        // const { classes } = this.props;

        return (
            <TableRow>
                <TableCell>{this.props.project.project_name}</TableCell>
                <TableCell>{this.props.project.description}</TableCell>
                <TableCell>
                    <Button value={this.props.project.project_id} onClick={this.handleClick} color="primary">Delete</Button>
                </TableCell>
            </TableRow>
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