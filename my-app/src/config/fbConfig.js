import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCDBCiYOGiRyj3HS0YbDvEHqej_na87XvU",
    authDomain: "project-cc08d.firebaseapp.com",
    databaseURL: "https://project-cc08d.firebaseio.com",
    projectId: "project-cc08d",
    storageBucket: "project-cc08d.appspot.com",
    messagingSenderId: "24955225151",
    appId: "1:24955225151:web:ee7e4324809533c3a0648a",
    measurementId: "G-V4TET6HEKD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  
  firebase.firestore().settings({timestampsInSnapshots:true});

  export{
    storage, firebase as default
  } 