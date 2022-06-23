// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js';
import { getDatabase, set, ref, update } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAQVUT5kPfhtzbdbfkVEOlNxspDE_oSgBs',
  authDomain: 'prime-number-557e1.firebaseapp.com',
  projectId: 'prime-number-557e1',
  storageBucket: 'prime-number-557e1.appspot.com',
  messagingSenderId: '900016089929',
  appId: '1:900016089929:web:e9b5ac11979d48115f0898',
  measurementId: 'G-Z10S70NKPS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export { database, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, set ,ref, update };
