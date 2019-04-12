import React, { Component } from 'react';
import { connect } from 'react-redux';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
      },
    menu: {
        width: 200,
    },
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

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_TAGS' });
    }

    handleChange = propertyName => event => {
        this.setState({
            project: {
                ...this.state.project,
                [propertyName]: event.target.value,
            }
        })
    }

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
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        label="Name"
                        className={classes.textField}
                        value={this.state.project.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <TextField
                        label="Project Completion Date"
                        type="date"
                        defaultValue="2017-05-24"
                        value={this.state.project.date_completed}
                        onChange={this.handleChange('date_completed')}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
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
                        label="Description"
                        className={classes.textField}
                        multiline
                        rows="4"
                        value={this.state.project.description}
                        onChange={this.handleChange('description')}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.addProject}>Submit</Button>
                </form>
            </div>
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