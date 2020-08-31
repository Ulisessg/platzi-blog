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
    //ID
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    //Publications
    const { publicationsReducer } = this.props;
    const { usersReducer } = this.props;
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
      const user = usersReducer.users[0][id - 1];
      const publications = publicationsReducer.publications[0];

      return (
        <>
          <h1>
            Posts de
            {user.name}
          </h1>
          {publications.map((publication) => {
            return (
              <div key={publication.id} className='pub_title'>
                <h2>{publication.title}</h2>
                <h3>{publication.body}</h3>
              </div>
            );
          })}
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
