import { GET_ALL_USERS, ERROR, EMPTY, LOADING } from '../types/usersTypes';

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

    case ERROR:
      return { ...state, error: true };

    case EMPTY:
      return { ...state, empty: true };

    case LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
