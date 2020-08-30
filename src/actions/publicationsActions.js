/* eslint-disable import/prefer-default-export */
import {
  GET_ALL_POSTS,
  POSTS_ERROR,
  POSTS_EMPTY,
  POSTS_LOADING,
} from '../types/publicationsTypes';

export const getAllPosts = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts').then(async (response) => {
    const data = await response.json();

    if (response.ok && data.length >= 1) {
      dispatch({
        type: GET_ALL_POSTS,
        payload: data,
      });
      dispatch({
        type: POSTS_LOADING,
        payload: false,
      });
    } else if (response.ok && data.length === 0) {
      dispatch({
        type: POSTS_EMPTY,
        payload: true,
      });
      dispatch({
        type: POSTS_LOADING,
        payload: false,
      });
    } else {
      dispatch({
        type: POSTS_ERROR,
        payload: true,
      });
      dispatch({
        type: POSTS_LOADING,
        payload: false,
      });
    }
  });
};
