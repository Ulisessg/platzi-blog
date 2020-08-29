import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

import Error from '../common/Error';
import Empty from '../common/Empty';
import Loading from '../common/Loading';

class Publications extends Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;

    const { error, empty, loading } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error />;
    }

    if (empty) {
      return <Empty />;
    }
    return (
      <>
        <h1>Publicaciondes de</h1>
        <div>{id}</div>
      </>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
};

export default connect(mapStateToProps, usersActions)(Publications);
