import React, { Component } from 'react';
import { connect } from 'react-redux';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

//----Styling----
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

class AdminTableItem extends Component {

    //Sends specific project id to be deleted from the database 
    handleClick = (event) => {
        console.log('Delete ID', this.props.project.project_id);
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: this.props.project.project_id })
        this.props.dispatch({ type: 'GET_PROJECTS' })
    }

    render() {

        return (
            <TableRow>
                <TableCell>{this.props.project.project_name}</TableCell>
                <TableCell>
                    <Button onClick={this.handleClick} color="secondary" variant="contained">Delete</Button>
                </TableCell>
            </TableRow>
        );
    }
}

AdminTableItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(AdminTableItem));




