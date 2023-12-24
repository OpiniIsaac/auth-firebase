// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXtZ8uAeEsweCJVCYGvUk7EcU3tGn1kFg",
  authDomain: "fir-auth-ed87b.firebaseapp.com",
  projectId: "fir-auth-ed87b",
  storageBucket: "fir-auth-ed87b.appspot.com",
  messagingSenderId: "689481451891",
  appId: "1:689481451891:web:d738ee3d6e89fdb4265d06",
  measurementId: "G-NXPSER4RJE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
const analytics = getAnalytics(app);