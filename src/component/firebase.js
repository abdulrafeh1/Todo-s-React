import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCfwF528XbgbzffXDnHudFx-5CUsTiphRY",
  authDomain: "react-todo-e4a82.firebaseapp.com",
  projectId: "react-todo-e4a82",
  storageBucket: "react-todo-e4a82.appspot.com",
  messagingSenderId: "1042420044847",
  appId: "1:1042420044847:web:302f48dbbc41fe2a42a2da"
};

initializeApp(firebaseConfig);;

export const db = getFirestore();

