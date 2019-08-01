export const createPost = post => {
  // getFirebase, getFirestore are passed though thunk.withExtraArgument
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call here
    // then dispatch action to reducer
    // w/ data from async call
    dispatch({
      type: "CREATE_POST",
      post: post
    });
  };
};
