import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQygtLHyFGB34AWjeCq0DfB6_SAfsCDTM",
  authDomain: "mymoney-31637.firebaseapp.com",
  projectId: "mymoney-31637",
  storageBucket: "mymoney-31637.appspot.com",
  messagingSenderId: "643724301852",
  appId: "1:643724301852:web:a5b1d834d2479a983fb1d9"
};

// init firebase

firebase.initializeApp(firebaseConfig)

//init firestore

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp firestore
const timestamp = firebase.firestore.Timestamp 

export { projectFirestore, projectAuth, timestamp }