import firebase from 'firebase'

import { ref, firebaseAuth } from 'config/constants'

export default function auth() {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
}

export function checkIfAuthed (store) {
  return store.getState().users.isAuthed
}

export function logout () {
  return firebaseAuth().signOut()
}

export function saveUser (user) {
  return ref.child(`users/${user.id}`)
    .set(user)
    .then(() => user)
}
