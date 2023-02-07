
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDpWLFE0adMKGaDkg599Euqg5n4cDhq9WA",
//   authDomain: "netflix-clone-a0d83.firebaseapp.com",
//   projectId: "netflix-clone-a0d83",
//   storageBucket: "netflix-clone-a0d83.appspot.com",
//   messagingSenderId: "52243948036",
//   appId: "1:52243948036:web:45c9275b0d48a391074b51"
// };
const firebaseConfig = {
  apiKey: "AIzaSyD0-SRCdy2G_ej1XPCwjKTf6l8STgfnSpU",
  authDomain: "netflix-clone-1d8f6.firebaseapp.com",
  projectId: "netflix-clone-1d8f6",
  storageBucket: "netflix-clone-1d8f6.appspot.com",
  messagingSenderId: "1055627401616",
  appId: "1:1055627401616:web:f34e88335ede93fa503b15",
  measurementId: "G-JFED6FXTXZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)