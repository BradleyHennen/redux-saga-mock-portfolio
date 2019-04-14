import React, { Component } from 'react';
import { connect } from 'react-redux';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



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

    handleChange = event => {
        this.setState({
            name: event.target.value,
        })
    }

    addKey = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_TAG', payload: this.state });
        this.setState({
            name: '',
        })
    }


    render() {
        const { classes } = this.props;

        return (

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
        );
    }
}

AdminForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withStyles(styles)(AdminForm));