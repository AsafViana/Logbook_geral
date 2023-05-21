import { initializeApp } from 'firebase/app'
import { getDatabase, set, ref, onValue, push, child } from 'firebase/database'
import { collection, getDoc, addDoc, getFirestore, doc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAWYSPV3j-0HLKqYHXasSmc4odJSxdbTcE',
	authDomain: 'log-e2233.firebaseapp.com',
	databaseURL: 'https://log-e2233-default-rtdb.firebaseio.com',
	projectId: 'log-e2233',
	storageBucket: 'log-e2233.appspot.com',
	messagingSenderId: '796213811970',
	appId: '1:796213811970:web:5e360ee010a7a2c598001b',
	measurementId: 'G-SRXWG2KRS0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const firestore = getFirestore(app)

export {
	firestore, collection, getDoc, addDoc, doc, setDoc
}
