import { GET_ALL_USERS, ERROR, EMPTY } from '../types/usersTypes';

const INITIAL_STATE = {
  users: [],
  error: false,
  empty: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };

    case ERROR:
      return { ...state, error: true };

    case EMPTY:
      return { ...state, empty: true };

    default:
      return state;
  }
};
