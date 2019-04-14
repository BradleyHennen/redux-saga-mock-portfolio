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
        maxWidth: 820,
    },
    title: {
        fontSize: 14,
    },
    media: {
        height: 300,
    },
    tags: {
        fontStyle: "italic",
        float: "right"
    },
    button: {
        marginBottom: 10,
    }
};

class ProjectListItem extends Component {

    thumbnailRender = () => {
        if (this.props.project.thumbnail === null) {
            return "/images/default.jpg";
        }
        else {
            return this.props.project.thumbnail
        }
    };

    websiteButtonRender = () => {
        if (this.props.project.website === null) {
            return true;
        }
    }

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
                            image={this.thumbnailRender()}
                            title="Project Screen Shot"
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography variant="h4" color="secondary" gutterBottom>
                            {this.props.project.project_name}
                        </Typography>
                        <Typography paragraph color="primary" gutterBottom>
                            {this.props.project.description}
                        </Typography>
                        <Typography variant="h6" className={classes.tags} gutterBottom>
                            {this.props.project.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href={this.props.project.github}
                            target="_blank"
                            rel="noreferrer"
                            size="small"
                            variant="contained"
                            className={classes.button}
                            color="secondary" >
                            GitHub
                        </Button>
                        <Button href={this.props.project.website}
                            disabled={this.websiteButtonRender()}
                            target="_blank"
                            rel="noreferrer"
                            variant="contained"
                            size="small"
                            className={classes.button}
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