// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAucU1Sbc9pr7ZfwzyJfAmdsI6Ay8UJ_HY",
    authDomain: "getmetherapy-bc1bb.firebaseapp.com",
    projectId: "getmetherapy-bc1bb",
    storageBucket: "getmetherapy-bc1bb.appspot.com",
    messagingSenderId: "153603608638",
    appId: "1:153603608638:web:b176ea89d235a45cb4816f",
    measurementId: "G-FNEM4P5N52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export { auth, provider };