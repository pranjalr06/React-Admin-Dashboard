// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF-McQeur1o2weyrPDXb3rlIYb9SlSNPA",
  authDomain: "react-admin-dashboard-a0c06.firebaseapp.com",
  projectId: "react-admin-dashboard-a0c06",
  storageBucket: "react-admin-dashboard-a0c06.appspot.com",
  messagingSenderId: "466682563726",
  appId: "1:466682563726:web:2241bd77279440d9378ddf",
  measurementId: "G-C7RXH2Z6LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);