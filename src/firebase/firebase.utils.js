import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCOlQ3x0RjCa6LmB8kfcGAWsSLdJ7rOks4',
  authDomain: 'ecom-react-484ec.firebaseapp.com',
  databaseURL: 'https://ecom-react-484ec.firebaseio.com',
  projectId: 'ecom-react-484ec',
  storageBucket: 'ecom-react-484ec.appspot.com',
  messagingSenderId: '712203740013',
  appId: '1:712203740013:web:fc8cab9b0e1cb52b7eb064',
  measurementId: 'G-60TJ8RBK86'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
