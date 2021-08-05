import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.TS_APP_FIREBASE_API_KEY,
//   authDomain: process.env.TS_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.TS_APP_FIREBASE_DATABASE,
//   projectId: process.env.TS_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.TS_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.TS_APP_FIREBASE_SENDER_ID,
//   appId: process.env.TS_APP_FIREBASE_APP_ID,
//   measurementId: process.env.TS_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyChUAI1--bh9PExJc9C0HQDiFfii879a1A",
  authDomain: "ts-node-app-54f3a.firebaseapp.com",
  projectId: "ts-node-app-54f3a",
  storageBucket: "ts-node-app-54f3a.appspot.com",
  messagingSenderId: "811405074655",
  appId: "1:811405074655:web:b21c2fcff5c82136c6896a",
  measurementId: "G-92P6SJC85M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export const FirebaseTimestamp = firebase.firestore.Timestamp;
export const provider = new firebase.auth.GoogleAuthProvider();
