import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


//----Styling----
const styles = theme => ({
    container: {
        marginTop: 50,
        marginBottom: 50,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: 20,
    },
});


class AdminForm extends Component {

    state = {
        name: '',
    }

    //Updates state.name with input value
    handleChange = event => {
        this.setState({
            name: event.target.value,
        })
    }

    //Sends state to addTag Saga to update database
    //Clears input fields on submit
    addKey = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_TAG', payload: this.state });
        this.setState({
            name: '',
        })
    }


    handleClick = () => {
        this.props.history.push('/');
    }



    render() {
        const { classes } = this.props;

        return (
            <div>
            <form className={classes.container} noValidate autoComplete="off">
                <Typography variant="h4" gutterBottom>Add Keys</Typography>
                <TextField
                    label="Add Key Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                />
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addKey}>Submit</Button>
            </form>
            <Button className={classes.button} onClick={this.handleClick}>Back to project page</Button>
            </div>
        );
    }
}

AdminForm.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withRouter(connect()(withStyles(styles)(AdminForm)));