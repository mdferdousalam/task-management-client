// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//     measurementId: process.env.REACT_APP_measurementId,
// };

const firebaseConfig = {
    apiKey: "AIzaSyBKCMp-s3dVa2ChyQSsFAKfojy9nIBfLEo",
    authDomain: "task-management-6f511.firebaseapp.com",
    projectId: "task-management-6f511",
    storageBucket: "task-management-6f511.appspot.com",
    messagingSenderId: "147977047231",
    appId: "1:147977047231:web:4f6d556ac9fc243d50ca0a",
    measurementId: "G-NCSRE783DP",
}



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
