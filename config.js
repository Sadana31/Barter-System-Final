import firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAkimpMt6Uxv9Ew0oAP9T63WX6_tWpxMEA",
  authDomain: "bartersystemsadana.firebaseapp.com",
  databaseURL: "https://bartersystemsadana.firebaseio.com",
  projectId: "bartersystemsadana",
  storageBucket: "bartersystemsadana.appspot.com",
  messagingSenderId: "172275150108",
  appId: "1:172275150108:web:0f17a8fc3ef4afe8e75ed9",
  measurementId: "G-XDMZJNRH6Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();