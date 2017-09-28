import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB0rfR5PAvBhubbjSTu5qbUE5azMXb52NU",
  authDomain: "duckr-4fd82.firebaseapp.com",
  databaseURL: "https://duckr-4fd82.firebaseio.com",
  projectId: "duckr-4fd82",
  storageBucket: "duckr-4fd82.appspot.com",
  messagingSenderId: "484724525153"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()

export const firebaseAuth = firebase.auth
