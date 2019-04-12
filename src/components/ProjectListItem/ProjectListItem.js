import React, { Component } from 'react';
import { connect } from 'react-redux';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';



const styles = {
    card: {
        width: "75%",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 140,
    },
};

class ProjectListItem extends Component {

render() {
    const { classes } = this.props;

    return (
        <div className="App">
            {/* {JSON.stringify(this.props.project)} */}
            <Card className={classes.card} >
                <CardActionArea 
                    href={this.props.project.website}
                    target="_blank"
                    rel="noreferrer">
                    <CardMedia 
                        className={classes.media}
                        image="/public/images/goat_small.jpg"
                        title="goat"
                    />
                    <CardContent>
                        <Typography variant="h4" color="primary" gutterBottom>
                            {this.props.project.project_name}
                        </Typography>
                        <Typography variant="h5" color="primary" gutterBottom>
                            {this.props.project.description}
                        </Typography>
                        <Typography variant="h5" color="primary" gutterBottom>
                            {this.props.project.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button href={this.props.project.github} 
                    target="_blank"
                    rel="noreferrer"
                    size="small" 
                    color="primary" >
                        GitHub
                    </Button>
                    <Button href={this.props.project.website}
                    target="_blank"
                    rel="noreferrer"
                    size="small" 
                    color="primary" >
                        Website
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
}

ProjectListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(ProjectListItem));