import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTEJhryEVbiVTG8FFy57pqhgUarOopwjc",
  authDomain: "learning-management-syst-483dc.firebaseapp.com",
  projectId: "learning-management-syst-483dc",
  storageBucket: "learning-management-syst-483dc.appspot.com",
  messagingSenderId: "491980981495",
  appId: "1:491980981495:web:326acc1e0dc36c3122fff2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
