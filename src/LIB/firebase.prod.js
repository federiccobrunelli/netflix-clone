import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyCY-5Y8ZK6Wnwst0fNXQiKd6M2SIhYAcME",
    authDomain: "netflix-clone-6321e.firebaseapp.com",
    projectId: "netflix-clone-6321e",
    storageBucket: "netflix-clone-6321e.appspot.com",
    messagingSenderId: "716270577625",
    appId: "1:716270577625:web:b3c007ab7c67b0b78e9bc8",
    measurementId: "G-5R7GV1NPL9"
};

export const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);
