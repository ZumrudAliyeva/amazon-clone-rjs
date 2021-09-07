import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlDz_Ju-LIPbEAPSpIZQskdpgMskzXPLg",
  authDomain: "react-1fc71.firebaseapp.com",
  projectId: "react-1fc71",
  storageBucket: "react-1fc71.appspot.com",
  messagingSenderId: "794897009819",
  appId: "1:794897009819:web:664dbbad0cd721dc450a3e",
  measurementId: "G-TG8RZ4H6JC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

// export {db, auth};