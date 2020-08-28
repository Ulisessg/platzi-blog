import React from 'react';

import '../../styles/index.css';

import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

class Users extends React.PureComponent {
  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    console.log(this.props);
    const { users, error, empty, loading } = this.props;

    if (loading) {
      return (
        <div className='loading'>
          <div className='lds-roller'>
            <div>{/* Animation*/}</div>
            <div>{/* Animation*/}</div>
            <div>{/* Animation*/}</div>
            <div>{/* Animation*/}</div>
            <div>{/* Animation*/}</div>
            <div>{/* Animation*/}</div>
            <div>{/* Animation*/}</div>
            <div>{/* Animation*/}</div>
          </div>
        </div>
      );
    }

    if (error) {
      return <h1>Lo sentimos ocurrió un error obteniendo los usuarios</h1>;
    }

    if (empty) {
      return <h1>Se el primero</h1>;
    }
    {
      return (
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th>Nombre</th>

                <th>Email</th>

                <th>Enlace</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 &&
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>

                    <td>{user.email}</td>

                    <td>{user.website}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
};

export default connect(mapStateToProps, usersActions)(Users);
