// Fill in your Firebase project config here and enable services per README
// Example:
// const firebaseConfig = { apiKey: "...", authDomain: "...", projectId: "...", storageBucket: "...", messagingSenderId: "...", appId: "..." }

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js'

// Project Firebase configuration (provided)
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
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
