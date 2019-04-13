import React, { Component } from 'react';
import AdminForm from '../AdminForm/AdminForm';
import AdminTable from '../AdminTable/AdminTable';

class Admin extends Component {
  
  render() {
    return (
        <div>
            <header>
                <h2>Admin</h2>
            </header>
            <AdminForm />
            <AdminTable />
        </div>
    );
  }
}

export default Admin;