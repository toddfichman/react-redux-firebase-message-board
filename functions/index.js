const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase); // setting up admin access to firebase functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};

// looking at firestore and will fire function passed to it
// when a new document is created in posts collection
exports.postCreated = functions.firestore
  .document("posts/{postId}")
  .onCreate((doc, context) => {
    const post = doc.data();
    console.log(context, context.params, 'post')
    const notification = {
      content: "Added new post",
      user: `${post.authorFirstName} ${post.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
      postId: context.params.postId
    };

    return createNotification(notification);
  });

// triggers callback when a new user is created
// in firebase auth
exports.userJoined = functions.auth.user().onCreate(user => {
  // getting reference to entry in firestore of new user
  return admin.firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => { // return doc of user in users collection
      const newUser = doc.data();
      console.log(newUser, 'newUser')
      const notification = {
        content: 'Signed Up',
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      }

      return createNotification(notification);
    });
});
