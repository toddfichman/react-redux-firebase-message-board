
export const createPost = post => {
  // getFirebase, getFirestore are passed though thunk.withExtraArgument
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call here
    // then dispatch action to reducer
    // w/ data from async call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid
    // console.log(profile, authorId, 'redux')
    //reference to 'posts' collection
    firestore.collection("posts").add({
      ...post,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      comments: [],
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

export const createPostComment = comment => {
  // getFirebase, getFirestore are passed though thunk.withExtraArgument
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call here
    // then dispatch action to reducer
    // w/ data from async call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid
    console.log(firestore, 'redux')
    //reference to 'posts' collection
    firestore.collection("posts").doc(comment.postId).update({
      comments: firestore.FieldValue.arrayUnion({
      ...comment,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
    })})
    .then(() => {
      dispatch({
        type: "CREATE_POST_COMMENT",
        comment: comment
      });
    })
    .catch((err) => {
      dispatch({
        type: "CREATE_POST_COMMENT_ERROR",
        err: err
      });
    })
  };
};
