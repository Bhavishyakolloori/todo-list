// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRHgg5hGTdV_lzEiUkB_h65hF49g0PGX0",
  authDomain: "todo-app-firstb.firebaseapp.com",
  projectId: "todo-app-firstb",
  storageBucket: "todo-app-firstb.appspot.com",
  messagingSenderId: "548007408287",
  appId: "1:548007408287:web:aac81b2358b4ba014c28aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);