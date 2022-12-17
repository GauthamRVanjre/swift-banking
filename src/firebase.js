// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCULYwr1JoF5rZq5U0BJypOLb44ar4asCQ",
  authDomain: "swift-banking.firebaseapp.com",
  projectId: "swift-banking",
  storageBucket: "swift-banking.appspot.com",
  messagingSenderId: "175059011362",
  appId: "1:175059011362:web:b565b7cf92224d8cecc77b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore();
export default db;
