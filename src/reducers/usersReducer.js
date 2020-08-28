import { GET_ALL_USERS, ERROR } from '../types/usersTypes';

const INITIAL_STATE = {
  users: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
    case ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
