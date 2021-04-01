import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6sWezjdSOLvKz8X8W2a-MzGru1vtlvc0",
  authDomain: "styled-whatsapp.firebaseapp.com",
  projectId: "styled-whatsapp",
  storageBucket: "styled-whatsapp.appspot.com",
  messagingSenderId: "42066092637",
  appId: "1:42066092637:web:9caf91153b350afe0223b4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
