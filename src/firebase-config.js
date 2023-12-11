// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaxWtusNM0f3fvSOCoOaxBL-myYba5eE8",
  authDomain: "chatroom-a627c.firebaseapp.com",
  projectId: "chatroom-a627c",
  storageBucket: "chatroom-a627c.appspot.com",
  messagingSenderId: "477672998860",
  appId: "1:477672998860:web:b627e678a7599ac554bf69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);