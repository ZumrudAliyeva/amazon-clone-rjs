import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCalj0hawX9ZOUWQJe6gGMOLlq-zuhlWCY",
  authDomain: "clone-react-74ee8.firebaseapp.com",
  projectId: "clone-react-74ee8",
  storageBucket: "clone-react-74ee8.appspot.com",
  messagingSenderId: "30695137345",
  appId: "1:30695137345:web:e32918a6212c85f280a6c0",
  measurementId: "G-0P4VZGEBTB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};