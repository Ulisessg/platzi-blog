import {
  GET_ALL_USERS,
  USERS_ERROR,
  USERS_EMPTY,
  USERS_LOADING,
} from '../types/usersTypes';

const INITIAL_STATE = {
  users: [],
  error: false,
  empty: false,
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };

    case USERS_ERROR:
      return { ...state, error: true };

    case USERS_EMPTY:
      return { ...state, empty: true };

    case USERS_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
