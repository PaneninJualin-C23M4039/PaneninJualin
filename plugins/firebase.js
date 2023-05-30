import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAnlnavpToVq6EPiey_je9Jel5TXBLYSXI",
  authDomain: "capstone-cdb77.firebaseapp.com",
  databaseURL: "https://capstone-cdb77-default-rtdb.firebaseio.com",
  projectId: "capstone-cdb77",
  storageBucket: "capstone-cdb77.appspot.com",
  messagingSenderId: "244546885264",
  appId: "1:244546885264:web:1933745e520784335f6a15",
  measurementId: "G-FGMFHW3WH4"
};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db }