// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIx6u6yhkTxRG8KPEENmRQklMdFF9O2ZI",
    authDomain: "email-password-auth-6f4b0.firebaseapp.com",
    projectId: "email-password-auth-6f4b0",
    storageBucket: "email-password-auth-6f4b0.appspot.com",
    messagingSenderId: "231024772011",
    appId: "1:231024772011:web:87f5a3fd933da1aa4508ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;