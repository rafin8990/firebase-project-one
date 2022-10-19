// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF6qo76yWsZyNPpTaz62qUPLCDPu4NTZo",
  authDomain: "fir-auth-project-2ed86.firebaseapp.com",
  projectId: "fir-auth-project-2ed86",
  storageBucket: "fir-auth-project-2ed86.appspot.com",
  messagingSenderId: "6325551121",
  appId: "1:6325551121:web:2b92dccc2da8187e6931b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;