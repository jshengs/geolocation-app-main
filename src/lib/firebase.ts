import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMhO1iVat-yI28mhNB9Uh7MQWnU6b6350",
  authDomain: "content-test-app.firebaseapp.com",
  projectId: "content-test-app",
  storageBucket: "content-test-app.appspot.com",
  messagingSenderId: "620636598580",
  appId: "1:620636598580:web:5ab14763b451cffc6bb561",
  measurementId: "G-NP4MJ1YYP5"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage();

export default firebaseApp;
