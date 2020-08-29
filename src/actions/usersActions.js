/* eslint-disable import/prefer-default-export */
import { GET_ALL_USERS, ERROR, EMPTY, LOADING } from '../types/usersTypes';

export const getAllUsers = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users').then(async (response) => {
    const data = await response.json();
    if (response.ok && data.length >= 1) {
      dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });

      dispatch({
        type: LOADING,
        payload: false,
      });
    } else if (response.ok && data.length === 0) {
      dispatch({
        type: EMPTY,
        payload: true,
      });

      dispatch({
        type: LOADING,
        payload: false,
      });
    } else {
      dispatch({
        type: ERROR,
        payload: true,
      });

      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  });
};
