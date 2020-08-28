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
    const { users, error } = this.props;

    if (error) {
      return <h1>Lo sentimos ocurrió un error obteniendo los usuarios</h1>;
    }

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

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
};

export default connect(mapStateToProps, usersActions)(Users);
