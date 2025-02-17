import "../css/styles.scss";

// Import the function we need to connect to firebase
import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'
// GET ALL DATA
import { getDocs } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { deleteDoc, doc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
// GET A SINGLE DOCUMENT
import { getDoc } from 'firebase/firestore';
// UPDATE A SINGLE DOCUMENT
import { updateDoc } from 'firebase/firestore';
// USE QUERIES
import { query, where, orderBy } from 'firebase/firestore';
// TIMESTAMPS
import { serverTimestamp } from 'firebase/firestore';
// This determines which database project you are connected to
const firebaseConfig = {
    apiKey: "AIzaSyDJc8yzzj8kFFGXQtZAS_WA7lu7v6dqF5s",
    authDomain: "fitframework-4e94c.firebaseapp.com",
    projectId: "fitframework-4e94c",
    storageBucket: "fitframework-4e94c.firebasestorage.app",
    messagingSenderId: "29347442006",
    appId: "1:29347442006:web:41af7eda0ff675e873faf7",
    measurementId: "G-55MG4BEC8B"
  };

// Call the imported function and use the config file to connect to the backend.
// Init the firebase app
initializeApp(firebaseConfig);

// Init services
const db = getFirestore();
const exercisesReference = collection(db, 'exercises');
const q = query(exercisesReference, where("id", "==", "Rickshaw_Carry"));
console.log(q); 

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
console.log(doc.id, " => ", doc.data());
}); 



