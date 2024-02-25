// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBp8hT5LV1pIfPtFVGJ6AcZwKvVBGA2C4",
  authDomain: "chat-app-89a2b.firebaseapp.com",
  projectId: "chat-app-89a2b",
  storageBucket: "chat-app-89a2b.appspot.com",
  messagingSenderId: "764428058277",
  appId: "1:764428058277:web:b1788e58c735b0ea0c574c",
  measurementId: "G-CK4Y94PC9T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
