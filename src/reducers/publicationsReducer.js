import {
  GET_ALL_POSTS,
  POSTS_EMPTY,
  POSTS_ERROR,
  POSTS_LOADING,
  POSTS_FIRST_CHARGE,
} from '../types/publicationsTypes';

const INITIAL_STATE = {
  publications: [],
  error: false,
  empty: false,
  loading: true,
  firstCharge: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, publications: action.payload };

    case POSTS_ERROR:
      return { ...state, error: action.payload };

    case POSTS_EMPTY:
      return { ...state, empty: action.payload };

    case POSTS_LOADING:
      return { ...state, loading: action.payload };

    case POSTS_FIRST_CHARGE:
      return { ...state, firstCharge: action.payload };
    default:
      return state;
  }
};
