import React from 'react';

import { connect } from 'react-redux';

import * as publicationsActions from '../../actions/publicationsActions';

//Components
import Error from '../common/Error';
import Empty from '../common/Empty';
import Loading from '../common/Loading';

class Publications extends React.PureComponent {
  componentDidMount() {
    const { getAllPosts } = this.props;
    getAllPosts();
  }

  render() {
    //ID
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    //Publications
    const { publicationsReducer } = this.props;
    const { error, empty, loading } = publicationsReducer;

    //Users
    const { usersReducer } = this.props;
    const { users } = usersReducer;

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
        <>
          <h1>Posts de</h1>
          <div>{id}</div>
          <div>{users.map((user) => console.log(user))}</div>
        </>
      );
    }
  }
}

const mapStateToProps = ({ publicationsReducer, usersReducer }) => {
  return {
    publicationsReducer,
    usersReducer,
  };
};

export default connect(mapStateToProps, publicationsActions)(Publications);
