import {
  GET_ALL_POSTS,
  POSTS_EMPTY,
  POSTS_ERROR,
  POSTS_LOADING,
} from '../types/publicationsTypes';

const INITIAL_STATE = {
  publications: [],
  error: false,
  empty: false,
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, publications: action.payload };

    case POSTS_ERROR:
      return { ...state, error: true };

    case POSTS_EMPTY:
      return { ...state, empty: true };

    case POSTS_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
