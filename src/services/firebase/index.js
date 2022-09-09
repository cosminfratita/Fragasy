import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDYcWYW4HXenBKky310hjlQcVoq1-A-nRI",
  authDomain: "backend-fragasy.firebaseapp.com",
  projectId: "backend-fragasy",
  storageBucket: "backend-fragasy.appspot.com",
  messagingSenderId: "440865821633",
  appId: "1:440865821633:web:cef4a38828101ff273d540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)