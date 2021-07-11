import Reacr from "react";
import firebase from "../../functions/firebaseInit";
import "firebase-auth";
export const auth = firebase.auth();
export const signInWithGoogle =() => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

export const signOut = () =>{
    auth.signOut();
    window.location.reload();
}

export default signOut