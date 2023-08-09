import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0H-j6-Ge8WgZNLhkiVIllTpoTqH7V-DU",
  authDomain: "shopping-redux-5ad57.firebaseapp.com",
  projectId: "shopping-redux-5ad57",
  storageBucket: "shopping-redux-5ad57.appspot.com",
  messagingSenderId: "30493087475",
  appId: "1:30493087475:web:bad4a4502f5269633cc986",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()