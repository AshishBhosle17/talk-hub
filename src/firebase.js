// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmyF97z2nZ6xGWI_3mIFjWc0gGT8LQbYM",
  authDomain: "talk-hub-6a8de.firebaseapp.com",
  projectId: "talk-hub-6a8de",
  storageBucket: "talk-hub-6a8de.appspot.com",
  messagingSenderId: "722003203981",
  appId: "1:722003203981:web:52fb28e84d3bb1c0c64fc4",
  measurementId: "G-NZQ3DD8DQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);