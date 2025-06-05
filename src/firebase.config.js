// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAR8AvFkiexCAZZ40R5vIfQF1SRlsgTJbM",
  authDomain: "dnd-task.firebaseapp.com",
  projectId: "dnd-task",
  storageBucket: "dnd-task.firebasestorage.app",
  messagingSenderId: "503083378215",
  appId: "1:503083378215:web:6434a7d6032a932367d002"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()