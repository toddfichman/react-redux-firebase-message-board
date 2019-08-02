export const createPost = post => {
  // getFirebase, getFirestore are passed though thunk.withExtraArgument
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call here
    // then dispatch action to reducer
    // w/ data from async call

    const firestore = getFirestore();
    //reference to 'posts' collection
    firestore.collection("posts").add({
      ...post,
      authorFirstName: "Todd",
      authorLastName: "F",
      authorId: "12345",
      createdAt: new Date()
    })
    .then(() => {
      dispatch({
        type: "CREATE_POST",
        post: post
      });
    })
    .catch((err) => {
      dispatch({
        type: "CREATE_POST_ERROR",
        err: err
      });
    })
    
  };
};


// FOR COMMENTS
// CREATE ANOTHER ACTION THAT LOOKS THROUGH FIRESTORE
// THEN ADDS COMMENT TO USER'S ARRAY OF COMMENTS
