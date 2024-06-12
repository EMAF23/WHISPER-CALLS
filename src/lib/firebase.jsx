// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnV-whlNJRTE5n5qPvrUnTjQQBhnHaFKU",
  authDomain: "reactchat-e4b6d.firebaseapp.com",
  projectId: "reactchat-e4b6d",
  storageBucket: "reactchat-e4b6d.appspot.com",
  messagingSenderId: "403629522522",
  appId: "1:403629522522:web:15b113cbd7a4fc5c672263"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth() 
export const db = getFirestore()
export const storage = getStorage()