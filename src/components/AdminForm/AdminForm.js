import React, { Component } from 'react';
import { connect } from 'react-redux';

//----Material UI----
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
 
  });

class AdminForm extends Component {
  
  render() {
    return (
        <div>
            <header>
                <h2>Admin</h2>
            </header>
            
            
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