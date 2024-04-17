import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6V95xWNIVA4mPq00Us79ScnSL09a8fk8",
    authDomain: "js-4teamproject.firebaseapp.com",
    projectId: "js-4teamproject",
    storageBucket: "js-4teamproject.appspot.com",
    messagingSenderId: "514915830726",
    appId: "1:514915830726:web:3805ff801aa871ba9ac0c7",
    measurementId: "G-ZGBX3PPB98",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, collection, getDocs, doc, getDoc, addDoc};
