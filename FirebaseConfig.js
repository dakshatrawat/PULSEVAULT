// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB8hPzmcmm1Gx6Gslrprvd-9XivxJGlux8",
  authDomain: "pulse-vault.firebaseapp.com",
  projectId: "pulse-vault",
  storageBucket: "pulse-vault.appspot.com",
  messagingSenderId: "901908231253",
  appId: "1:901908231253:web:fce9ad7e20009a8e6810dc",
  measurementId: "G-JGF601T76P"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);