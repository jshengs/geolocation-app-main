// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMhO1iVat-yI28mhNB9Uh7MQWnU6b6350",
  authDomain: "content-test-app.firebaseapp.com",
  projectId: "content-test-app",
  storageBucket: "content-test-app.appspot.com",
  messagingSenderId: "620636598580",
  appId: "1:620636598580:web:5ab14763b451cffc6bb561",
  measurementId: "G-NP4MJ1YYP5"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize auth && firestore with the 'firebaseApp' property
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage();

export default firebaseApp;
