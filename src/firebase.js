import * as firebase from 'firebase'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyC03KqYCgRiwh5NbN2eItzcJrLpIdIbVdk',
  authDomain: 'graphql-mern-reference.firebaseapp.com',
  // databaseURL: 'https://graphql-mern-reference.firebaseio.com',
  projectId: 'graphql-mern-reference',
  storageBucket: 'graphql-mern-reference.appspot.com',
  // messagingSenderId: '842755476373',
  appId: '1:842755476373:web:4a1c6a572ad8570a8ac49c',
  measurementId: 'G-XR37JNRJ10',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.googleAuthProvider()
