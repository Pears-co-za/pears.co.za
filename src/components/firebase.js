// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJuDkaw8EwFTDXzQoS-mL7TI4-4a5Znhk",
    authDomain: "pears-6a45e.firebaseapp.com",
    projectId: "pears-6a45e",
    storageBucket: "pears-6a45e.firebasestorage.app",
    messagingSenderId: "336330990320",
    appId: "1:336330990320:web:f6985231482767c7b01835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;