// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd0wxjvet31J8A_rNpkpBB7RS0fnz2GnQ",
  authDomain: "netflix-clone-7da2d.firebaseapp.com",
  projectId: "netflix-clone-7da2d",
  storageBucket: "netflix-clone-7da2d.appspot.com",
  messagingSenderId: "228395232725",
  appId: "1:228395232725:web:162e8da9512fb098d5a15c",
  measurementId: "G-0QR6458E2M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
