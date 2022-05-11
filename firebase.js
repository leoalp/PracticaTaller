// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
import {getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClwmS4VPp5jAAF88OpbHf7VZSmjCgEJh4",
  authDomain: "tallerprogramacionweb-c86c3.firebaseapp.com",
  projectId: "tallerprogramacionweb-c86c3",
  storageBucket: "tallerprogramacionweb-c86c3.appspot.com",
  messagingSenderId: "687040362669",
  appId: "1:687040362669:web:f6e3632edbfbfaa00b6e24",
  measurementId: "G-RHRJRGEM11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//en que momento nos vamos a conectar a firebase
const db = getFirestore();

export const setPublicacion = (titulo, autor, contenido)=>{
//acá, si la collección no existe se crea, sino, solo le insertará la información
    addDoc(collection(db, 'publicaciones'), {titulo, autor, contenido});
}

export const getPublicaciones = () => {
    return getDocs(collection(db, 'publicaciones'))
}

