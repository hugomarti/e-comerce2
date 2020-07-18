import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZZDrsEZiC5BBnDxjtwfKFWW48RA6cYWQ",
  authDomain: "crwn-db4-6aa06.firebaseapp.com",
  databaseURL: "https://crwn-db4-6aa06.firebaseio.com",
  projectId: "crwn-db4-6aa06",
  storageBucket: "crwn-db4-6aa06.appspot.com",
  messagingSenderId: "688469941463",
  appId: "1:688469941463:web:61e9f5e2ee550254632492",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
