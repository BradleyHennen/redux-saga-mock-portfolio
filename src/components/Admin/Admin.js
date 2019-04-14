import React, { Component } from 'react';

//----Components----
import AdminForm from '../AdminForm/AdminForm';
import AdminTable from '../AdminTable/AdminTable';
import AdminKeyForm from '../AdminKeyForm/AdminKeyForm';

//----Materal-UI----
import Typography from '@material-ui/core/Typography';

class Admin extends Component {

  render() {
    return (
      <div className="admin">
        <Typography variant="h1" gutterBottom>Admin Page</Typography>
        <AdminForm />
        <AdminTable />
        <AdminKeyForm />
      </div>
    );
  }
}

export default Admin;