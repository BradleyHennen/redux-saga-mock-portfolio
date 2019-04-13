import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';


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


class AdminTableItem extends Component {

    handleClick = (event) => {
        console.log('Delete ID', this.props.project.project_id);
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: this.props.project.project_id })
        this.props.dispatch({ type: 'GET_PROJECTS'})
    }

    render() {
        // const { classes } = this.props;

        return (
            <TableRow>
                <TableCell>{this.props.project.project_name}</TableCell>
                {/* <TableCell>{this.props.project.description}</TableCell> */}
                <TableCell>
                    <Button onClick={this.handleClick} color="primary"  variant="contained">Delete</Button>
                </TableCell>
            </TableRow>
        );
    }
}

AdminTableItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(AdminTableItem));