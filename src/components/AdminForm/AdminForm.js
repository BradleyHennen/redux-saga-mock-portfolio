import React, { Component } from 'react';
import { connect } from 'react-redux';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';


//----Styling----
const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: 20,
    },
    menu: {
        width: 200,
    },
    date: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 16,
        width: 200,
    },
    multiline: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 500,
    }
});


class AdminForm extends Component {
    state = {
        project: {
            name: '',
            description: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: 0,
        }
    }

    //Gets tags from database to be used in the dropdown selector in the form
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_TAGS' });
    }

    //Updates state.project values based on specific key propertyName
    handleChange = propertyName => event => {
        this.setState({
            project: {
                ...this.state.project,
                [propertyName]: event.target.value,
            }
        })
    }

    //Sends state.project to the addProject Saga to update database 
    //Clear input fields on submit
    addProject = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.project });
        this.setState({
            project: {
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: 0,
            }
        })
    }


    render() {
        const { classes } = this.props;

        return (

            <form className={classes.container} noValidate autoComplete="off">
                <Typography variant="h4" gutterBottom>Add Project</Typography>
                <TextField
                    label="Project Name"
                    className={classes.textField}
                    value={this.state.project.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <TextField
                    label="GitHub URL"
                    className={classes.textField}
                    value={this.state.project.github}
                    onChange={this.handleChange('github')}
                    margin="normal"
                />
                <TextField
                    label="Website URL (Optional)"
                    className={classes.textField}
                    value={this.state.project.website}
                    onChange={this.handleChange('website')}
                    margin="normal"
                />
                <TextField
                    select
                    label="Select A Tag"
                    className={classes.textField}
                    value={this.state.project.tag_id}
                    onChange={this.handleChange('tag_id')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin="normal"
                >
                    {this.props.reduxState.tags.map(option => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Project Completion Date"
                    type="date"
                    margin="normal"
                    value={this.state.project.date_completed}
                    onChange={this.handleChange('date_completed')}
                    className={classes.date}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br />
                <TextField
                    label="Project Description"
                    className={classes.multiline}
                    multiline
                    rows="4"
                    value={this.state.project.description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                />

                <br />
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addProject}>Submit</Button>
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