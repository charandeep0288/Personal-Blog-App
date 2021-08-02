import firebase from "firebase/app";

import "firebase/firestore";

// Step 1 
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCc1oPn5d-f8dkVbvSWtsX9d80_nCgRqlc",
    authDomain: "personal-blog-b69e4.firebaseapp.com",
    projectId: "personal-blog-b69e4",
    storageBucket: "personal-blog-b69e4.appspot.com",
    messagingSenderId: "12006229651",
    appId: "1:12006229651:web:8a84cf30d3836e40af6f66"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// Step 2
export const auth = firebase.auth();

// Step 3 -> firebase console; enable login in auth panel

// Step 4
let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;