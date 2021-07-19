import firebase from "firebase/app"
import "firebase/firebase-firestore"

firebase.initializeApp({
  apiKey: "AIzaSyCo0EAF4PV4mpOdyzlniMTtG_fieStt0GY",
    authDomain: "bakimi.firebaseapp.com",
    projectId: "bakimi",
    storageBucket: "bakimi.appspot.com",
    messagingSenderId: "305238642498",
    appId: "1:305238642498:web:5de25a228edf39b31d02db"
}

)


export default firebase


export const db = firebase.firestore()