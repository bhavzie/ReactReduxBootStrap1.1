import { FETCH_POSTS, NEW_POST, DEL_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts?&_limit=5")
    .then((response) => response.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};

export const createPosts = (post) => dispatch => {
    dispatch({
      type: NEW_POST,
      payload: post,
    });
}

export const delPost = (post) => dispatch => {
  dispatch({
    type : DEL_POST,
    payload : post,
  })
}