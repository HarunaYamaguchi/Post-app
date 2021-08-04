import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.TS_APP_FIREBASE_APIKEY,
  authDomain: process.env.TS_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.TS_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.TS_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.TS_APP_SENDER_ID,
  appId: process.env.TS_APP_FIREBASE_APPID,
  measurementId: process.env.TS_APP_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
export const FirebaseTimestamp = firebase.firestore.Timestamp;
export const provider = new firebase.auth.GoogleAuthProvider();
