// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0SUp5syXBFNWA5ra-dlnhQKKtrmx6YHY",
  authDomain: "assignment-8-9bfd2.firebaseapp.com",
  projectId: "assignment-8-9bfd2",
  storageBucket: "assignment-8-9bfd2.firebasestorage.app",
  messagingSenderId: "465223373734",
  appId: "1:465223373734:web:67831c4c97688bd3a87567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)