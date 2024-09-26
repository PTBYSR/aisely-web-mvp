// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5cK8jeEKO-yFv8jdPtO8UfnwNqFQhCtg",
  authDomain: "aisely-web-app.firebaseapp.com",
  projectId: "aisely-web-app",
  storageBucket: "aisely-web-app.appspot.com",
  messagingSenderId: "503524210518",
  appId: "1:503524210518:web:cea64ac18f96933472c8f7",
  measurementId: "G-G0EC88HMS5"
};

// Initialize Firebase
if(typeof window !== "undefined") {
  
}
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };

