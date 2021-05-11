const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = { 
    apiKey: "AIzaSyAIDcwA3BON_PQ8B21YrMrDYVqB7S_bfCc",
    authDomain: "software-introduction.firebaseapp.com",
    projectId: "software-introduction",
    storageBucket: "software-introduction.appspot.com",
    messagingSenderId: "384712603218",
    appId: "1:384712603218:web:4a0461b66df194e98f518b"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase