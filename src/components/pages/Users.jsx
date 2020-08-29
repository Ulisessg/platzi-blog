import React from 'react';

import '../../styles/index.css';

//Redux
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';

//Components
import Loading from '../common/Loading';
import Error from '../common/Error';
import Empty from '../common/Empty';
import Table from '../common/Table';

class Users extends React.PureComponent {
  render() {
    const { users, error, empty, loading } = this.props;

    const { getAllUsers } = this.props;
    getAllUsers();
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error />;
    }

    if (empty) {
      return <Empty />;
    }
    {
      return (
        <div>
          <h1>Usuarios</h1>
          <Table users={users} />
        </div>
      );
    }
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
};

export default connect(mapStateToProps, usersActions)(Users);
