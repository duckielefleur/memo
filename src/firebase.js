import firebase from 'firebase';
import 'firebase/firestore'
  const firebaseConfig = {
    apiKey: "AIzaSyC9WMEGCq97QhDE2jHjFCLD0lEpBw6zKAU",
    authDomain: "memo-b12b6.firebaseapp.com",
    projectId: "memo-b12b6",
    storageBucket: "memo-b12b6.appspot.com",
    messagingSenderId: "1088135883537",
    appId: "1:1088135883537:web:66b7147c18511774513ab0",
    measurementId: "G-X26THZ7Y8B"
  };
 
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export default firebase