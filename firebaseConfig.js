import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAYFqeR9ynvESnDGNBH7S0lDajMByuf-DM",
    authDomain: "mypa-f26e8.firebaseapp.com",
    projectId: "mypa-f26e8",
    storageBucket: "mypa-f26e8.firebasestorage.app",
    messagingSenderId: "1015804360651",
    appId: "1:1015804360651:web:1e7ef9381ed53d0801684e",
    measurementId: "G-K5M7F4DJET"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
