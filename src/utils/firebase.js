// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-wwKWMILHV6FAmrZBsrAyPsyrFiJ5__0",
  authDomain: "tk1730-52826.firebaseapp.com",
  projectId: "tk1730-52826",
  storageBucket: "tk1730-52826.firebasestorage.app",
  messagingSenderId: "731259258447",
  appId: "1:731259258447:web:d0701f4045f220447fcc3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
