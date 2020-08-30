/* eslint-disable import/prefer-default-export */
import {
  GET_ALL_USERS,
  USERS_ERROR,
  USERS_EMPTY,
  USERS_LOADING,
  USERS_FIRTS_CHARGE,
} from '../types/usersTypes';

export const getAllUsers = () => (dispatch, getState) => {
  fetch('https://jsonplaceholder.typicode.com/users').then(async (response) => {
    //Data
    const { users } = getState().usersReducer;
    const data = await response.json();
    const usersUpdated = [...users, data];

    if (response.ok && data.length >= 1) {
      dispatch({
        type: GET_ALL_USERS,
        payload: usersUpdated,
      });

      dispatch({
        type: USERS_LOADING,
        payload: false,
      });

      dispatch({
        type: USERS_FIRTS_CHARGE,
        payload: false,
      });
    } else if (response.ok && data.length === 0) {
      dispatch({
        type: USERS_EMPTY,
        payload: true,
      });

      dispatch({
        type: USERS_LOADING,
        payload: false,
      });
    } else {
      dispatch({
        type: USERS_ERROR,
        payload: true,
      });

      dispatch({
        type: USERS_LOADING,
        payload: false,
      });
    }
  });
};
