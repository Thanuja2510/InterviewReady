// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYEUN0hHmlcJ5vzc6IIAJCgzE5Z1np6uY",
    authDomain: "interviewready-24042.firebaseapp.com",
    projectId: "interviewready-24042",
    storageBucket: "interviewready-24042.appspot.com",
    messagingSenderId: "123817282941",
    appId: "1:123817282941:web:e8f51569a1558751e89014",
    measurementId: "G-8PW8B9SXDE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth from the initialized app
const db = getFirestore(app); // Initialize Firestore from the initialized app

export { app, auth, db };