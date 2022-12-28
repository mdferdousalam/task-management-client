// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKCMp-s3dVa2ChyQSsFAKfojy9nIBfLEo",
    authDomain: "task-management-6f511.firebaseapp.com",
    projectId: "task-management-6f511",
    storageBucket: "task-management-6f511.appspot.com",
    messagingSenderId: "147977047231",
    appId: "1:147977047231:web:4f6d556ac9fc243d50ca0a",
    measurementId: "G-NCSRE783DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);