// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//DONOT share conFig in public
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ1a5398ubL5v2ejBFqRXpCaMSQkxwvoM",
  authDomain: "email-password-auth-bcc11.firebaseapp.com",
  projectId: "email-password-auth-bcc11",
  storageBucket: "email-password-auth-bcc11.firebasestorage.app",
  messagingSenderId: "592222180095",
  appId: "1:592222180095:web:32677a0e092b55189f72ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth =getAuth(app);
 export default auth;
