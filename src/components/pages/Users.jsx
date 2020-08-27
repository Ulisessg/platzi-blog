import React from 'react';

import '../../styles/index.css';
import { connect } from 'react-redux';

class Users extends React.PureComponent {
  render() {
    console.log(this.props);
    const { users } = this.props;
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

const mapReducersToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapReducersToProps, {})(Users);
