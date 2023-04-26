// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5S6Y0zH5QDzfJJ_ZxVfzbBmNhFiLG2UQ",
  authDomain: "test-deshboard.firebaseapp.com",
  projectId: "test-deshboard",
  storageBucket: "test-deshboard.appspot.com",
  messagingSenderId: "840827761004",
  appId: "1:840827761004:web:d4cfa7f788467520ebc349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 