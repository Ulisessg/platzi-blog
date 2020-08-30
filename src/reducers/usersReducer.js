import {
  GET_ALL_USERS,
  USERS_ERROR,
  USERS_EMPTY,
  USERS_LOADING,
  USERS_FIRTS_CHARGE,
} from '../types/usersTypes';

const INITIAL_STATE = {
  users: [],
  error: false,
  empty: false,
  loading: true,
  firstCharge: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };

    case USERS_FIRTS_CHARGE:
      return { ...state, firstCharge: action.payload };

    case USERS_ERROR:
      return { ...state, error: action.payload };

    case USERS_EMPTY:
      return { ...state, empty: action.payload };

    case USERS_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
