/* eslint-disable import/prefer-default-export */
import { GET_ALL_USERS, ERROR } from '../types/usersTypes';

export const getAllUsers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      const success = data.length >= 1;
      if (success) {
        dispatch({
          type: GET_ALL_USERS,
          payload: data,
        });
      } else {
        dispatch({
          type: ERROR,
          payload: true,
        });
      }
    });
};
