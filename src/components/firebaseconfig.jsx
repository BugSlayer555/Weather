// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSNDyK7KIeAtmBm40RR1GkYUewd6IVc0w",
  authDomain: "weather-17a5e.firebaseapp.com",
  projectId: "weather-17a5e",
  storageBucket: "weather-17a5e.firebasestorage.app",
  messagingSenderId: "867924386428",
  appId: "1:867924386428:web:f1cfde8e3ea30f6a76dff9",
  measurementId: "G-5HJ7P1K253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);