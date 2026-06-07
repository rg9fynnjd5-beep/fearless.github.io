// Firebase initialization with provided config (replace if needed)
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyDOlhxsnPOb0nYQ-frL9tBlWktqmumCgM0",
  authDomain: "fearless-799ad.firebaseapp.com",
  projectId: "fearless-799ad",
  storageBucket: "fearless-799ad.firebasestorage.app",
  messagingSenderId: "467990256673",
  appId: "1:467990256673:web:b047eeecdc19d5fcf55760",
  measurementId: "G-CN6K74E19J"
}

const app = initializeApp(firebaseConfig)
let analytics = null
try {
  if (typeof window !== 'undefined') analytics = getAnalytics(app)
} catch (e) {
  // analytics may fail in some environments; it's optional
}

export { app, analytics }
export const auth = getAuth(app)
export const db = getFirestore(app)
