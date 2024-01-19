import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCBXF9I4o5FXAZ6CjCilGbZzz5JvI9hYE",
  authDomain: "ecommerce-35ce6.firebaseapp.com",
  databaseURL:
    "https://ecommerce-35ce6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-35ce6",
  storageBucket: "ecommerce-35ce6.appspot.com",
  messagingSenderId: "989357586665",
  appId: "1:989357586665:web:734d7d97c0335f464cd878",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const auth = getAuth(app);
