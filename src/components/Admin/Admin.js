import React, { Component } from 'react';
import AdminForm from '../AdminForm/AdminForm';

class Admin extends Component {
  
  render() {
    return (
        <div>
            <header>
                <h2>Admin</h2>
            </header>
            <AdminForm />
            
        </div>
    );
  }
}

export default Admin;