/* eslint-disable import/prefer-default-export */
import { GET_ALL_USERS } from '../types/usersTypes';

export const getAllUsers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });
    });
};
