import React from 'react';

//Styles
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
  componentDidMount() {
    const { getAllUsers } = this.props;
    const { firstCharge } = this.props;

    if (firstCharge) {
      getAllUsers();
    }
  }

  render() {
    const { users, error, empty, loading } = this.props;

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
        <main role='main'>
          <h1>Usuarios</h1>
          {users && <Table users={users[0]} />}
        </main>
      );
    }
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
