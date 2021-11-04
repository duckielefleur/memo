import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9WMEGCq97QhDE2jHjFCLD0lEpBw6zKAU",
    authDomain: "memo-b12b6.firebaseapp.com",
    databaseURL: "https://memo-b12b6-default-rtdb.firebaseio.com",
    projectId: "memo-b12b6",
    storageBucket: "memo-b12b6.appspot.com",
    messagingSenderId: "1088135883537",
    appId: "1:1088135883537:web:66b7147c18511774513ab0",
    measurementId: "G-X26THZ7Y8B"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;