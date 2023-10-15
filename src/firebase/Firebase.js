// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBetBhA2l5zNraiPeWTG2K7sw_WJw9UI5Q",
  authDomain: "bossisback-email-auth.firebaseapp.com",
  projectId: "bossisback-email-auth",
  storageBucket: "bossisback-email-auth.appspot.com",
  messagingSenderId: "643431327606",
  appId: "1:643431327606:web:e32fdb5e24ceb9376bbc57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
