import React, { Component } from 'react';
import AdminForm from '../AdminForm/AdminForm';
import AdminTable from '../AdminTable/AdminTable';

import Typography from '@material-ui/core/Typography';

class Admin extends Component {
  
  render() {
    return (
        <div>
            <Typography  variant="h1" gutterBottom>Admin Page</Typography>
            <AdminForm />
            <AdminTable />
        </div>
    );
  }
}

export default Admin;