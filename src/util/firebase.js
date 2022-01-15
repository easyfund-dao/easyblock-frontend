// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdm3wZ6k2QEJ4m7OYhoE4ZkpIs0OFk7sw",
    authDomain: "easyblock-274ae.firebaseapp.com",
    projectId: "easyblock-274ae",
    storageBucket: "easyblock-274ae.appspot.com",
    messagingSenderId: "153246783575",
    appId: "1:153246783575:web:e67a6421a507d780796b12",
    measurementId: "G-MLSYQ3ZD7H"
};

// Initialize Firebase
export const initializeFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
};
