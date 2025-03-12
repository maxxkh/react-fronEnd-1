// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Only import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAlrFsIpnytrAZGdKJxKcQy_j_RbKj0ka4",
  authDomain: "fir-auth-bf9ed.firebaseapp.com",
  projectId: "fir-auth-bf9ed",
  // storageBucket: "fir-auth-bf9ed.appspot.com", // This can stay, but it won't be used
  messagingSenderId: "702557663477",
  appId: "1:702557663477:web:19e30c0db1f3f3000555bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore instance
