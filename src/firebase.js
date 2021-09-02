import firebase from'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const app = firebase.initializeApp({
  /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROCESS_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
  */
  apiKey: "AIzaSyAwXQO5AF5SQAjKtOljk9iYFsEMg4J5Sbo",
  authDomain: "ppaper-dev-304f8.firebaseapp.com",
  projectId: "ppaper-dev-304f8",
  storageBucket: "ppaper-dev-304f8.appspot.com",
  messagingSenderId: "282949201795",
  appId: "1:282949201795:web:c1c55e025418469f0cd0b6"
})

var db = app.firestore();
var increment = firebase.firestore.FieldValue.increment(1);
export {db};
export {increment};

export const auth = app.auth()
export default app