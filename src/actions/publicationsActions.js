/* eslint-disable import/prefer-default-export */
import {
  GET_ALL_POSTS,
  POSTS_ERROR,
  POSTS_EMPTY,
  POSTS_LOADING,
  POSTS_FIRST_CHARGE,
} from '../types/publicationsTypes';

export const getByUser = (id) => async (dispatch, getState) => {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(
    async (response) => {
      //Data
      const { publications } = getState().publicationsReducer;
      const { firstCharge } = getState().publicationsReducer;
      const data = await response.json();
      const publicationsUpdated = [...publications, data];
      const idsUpdated = [...firstCharge, id];

      if (response.ok && data.length >= 1) {
        dispatch({
          type: GET_ALL_POSTS,
          payload: publicationsUpdated,
        });

        dispatch({
          type: POSTS_LOADING,
          payload: false,
        });

        dispatch({
          type: POSTS_FIRST_CHARGE,
          payload: idsUpdated,
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
    },
  );
};
