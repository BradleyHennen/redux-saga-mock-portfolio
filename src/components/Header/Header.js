import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = {
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },

};

class Header extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <header >
        <Grid container justify="center" alignItems="center" direction="column">
          <Avatar alt="Remy Sharp" src="/images/bradley_hennen.jpg" className={classes.bigAvatar} />
          <Typography  variant="h2" gutterBottom>Bradley Hennen</Typography>
        </Grid>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);