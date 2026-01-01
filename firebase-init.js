// firebase-init.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBSr__wqMxY_IL7LXsO9P1LpJDiDAQNsmE",
  authDomain: "aplus-tutors-765bf.firebaseapp.com",
  projectId: "aplus-tutors-765bf",
  storageBucket: "aplus-tutors-765bf.firebasestorage.app",
  messagingSenderId: "387214060287",
  appId: "1:387214060287:web:d6213f9c2624f029c0baca",
  measurementId: "G-41V5ZZDH1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Function to log events
export async function trackEvent(user, eventName, details = {}) {
  try {
    await addDoc(collection(db, "events"), {
      user: user.fullName || "Unknown",
      email: user.email || "Unknown",
      department: user.department || "Unknown",
      event: eventName,
      details,
      timestamp: serverTimestamp()
    });
    console.log(`✅ Event tracked: ${eventName}`);
  } catch (err) {
    console.error("❌ Error tracking event:", err);
  }
}