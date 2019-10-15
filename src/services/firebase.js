import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAC21wlJmr5bmW57nqz7n0lb7CBLqZ8vuc',
  authDomain: 'pizzaria-varner.firebaseapp.com',
  databaseURL: 'https://pizzaria-varner.firebaseio.com',
  projectId: 'pizzaria-varner',
  storageBucket: 'pizzaria-varner.appspot.com',
  messagingSenderId: '9200315615'
}

firebase.initializeApp(config)

export default firebase
