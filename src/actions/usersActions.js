/* eslint-disable import/prefer-default-export */
import { GET_ALL_USERS, ERROR, EMPTY } from '../types/usersTypes';

export const getAllUsers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users').then(async (response) => {
    const data = await response.json();
    if (response.ok && data.length >= 1) {
      dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });
    } else if (response.ok && data.length === 0) {
      dispatch({
        type: EMPTY,
        payload: true,
      });
    } else {
      dispatch({
        type: ERROR,
        payload: true,
      });
    }
  });
};
