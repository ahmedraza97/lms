// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNKdzQfMrYfWRn2rYRnq9Vxrs9TEzTLeE",
  authDomain: "lms-abeer.firebaseapp.com",
  projectId: "lms-abeer",
  storageBucket: "lms-abeer.appspot.com",
  messagingSenderId: "45435078049",
  appId: "1:45435078049:web:7f3a572693859b4cbeb7e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)




export {db,auth}