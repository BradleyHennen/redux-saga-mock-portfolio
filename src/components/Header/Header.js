import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = {
  header: {
    fontWeight: 500,
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
  headerTitle: {
    // textDecoration: 'underline',
    letterSpacing: 2,
    fontWeight: 400,
    color: "#212121",
    textShadow: `1px 1px 0 #bdbdbd`
  }
};

class Header extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <header >
        <Grid container justify="center" alignItems="center" direction="column">
          <Avatar alt="Bradley Hennen" src="/images/bradley_hennen.jpg" className={classes.bigAvatar} />
          <Typography  variant="h1" className={classes.headerTitle} gutterBottom>Bradley Hennen</Typography>
          <Typography className={classes.headerTitle} variant="h2" gutterBottom>Portfolio</Typography>
        </Grid>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);