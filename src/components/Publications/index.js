import React from 'react';

import { connect } from 'react-redux';

import * as publicationsActions from '../../actions/publicationsActions';

//Components
import Error from '../common/Error';
import Empty from '../common/Empty';
import Loading from '../common/Loading';

class Publications extends React.PureComponent {
  async componentDidMount() {
    //ID
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    //Handle fetch
    const { publicationsReducer } = this.props;
    const { firstCharge } = publicationsReducer;
    const { getByUser } = this.props;
    if (!firstCharge.includes(id)) {
      getByUser(id);
    }
  }

  render() {
    //Publications
    console.log(this.props);
    const { publicationsReducer } = this.props;
    const { error, empty, loading } = publicationsReducer;

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
          <div />
          <div />
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
