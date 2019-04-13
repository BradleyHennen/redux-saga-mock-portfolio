import React, { Component } from 'react';
import { connect } from 'react-redux';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';



const styles = {
    card: {
        maxWidth: 800,
    },
    title: {
        fontSize: 14,
    },
    media: {
        height: 300,
    },
};

class ProjectListItem extends Component {

render() {
    const { classes } = this.props;

    return (
            <Grid item xs={12}>
                <Card className={classes.card} >
                    <CardActionArea 
                        href={this.props.project.website}
                        target="_blank"
                        rel="noreferrer">
                        <CardMedia 
                            className={classes.media}
                            image={this.props.project.thumbnail}
                            title="goat"
                        />
                        </CardActionArea>
                        <CardContent>
                            <Typography variant="h5" color="primary" gutterBottom>
                                {this.props.project.project_name}
                            </Typography>
                            <Typography paragraph color="primary" gutterBottom>
                                {this.props.project.description}
                            </Typography>
                            <Typography variant="h6" color="primary" gutterBottom>
                                {this.props.project.name}
                            </Typography>
                        </CardContent>
                    
                    <CardActions>
                        <Button href={this.props.project.github} 
                        target="_blank"
                        rel="noreferrer"
                        size="small" 
                        variant="contained"
                        color="secondary" >
                            GitHub
                        </Button>
                        <Button href={this.props.project.website}
                        target="_blank"
                        rel="noreferrer"
                        variant="contained"
                        size="small" 
                        color="secondary" >
                            Website
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
    );
}
}

ProjectListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(ProjectListItem));