import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
//import "firebase/auth";
//import "firebase/database";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdeWqR7jphCktyW0XNq-N3faPiFLV2vlw",
    authDomain: "instagram-clone-react-c4a39.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-c4a39-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-c4a39",
    storageBucket: "instagram-clone-react-c4a39.appspot.com",
    messagingSenderId: "759709830507",
    appId: "1:759709830507:web:fc95b8bd258cdd0e2d902e",
    measurementId: "G-9BKZBTEKSN"
  });
  

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };