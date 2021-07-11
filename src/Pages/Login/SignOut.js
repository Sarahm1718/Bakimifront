import React from "react";
import firebase from "../../functions/firebaseInit";
import { auth } from '../../functions/firebaseAuth';

export const signInWithGoogle =() => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

export const signOut=()=> {
    auth.signOut();
    window.location.href = '/';
}

export default signOut