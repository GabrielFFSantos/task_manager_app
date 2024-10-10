import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtCv7Tuu1Zi5j8Fv8j7TnX3NvW55BScYo",
  authDomain: "task-manager-app-9b1af.firebaseapp.com",
  projectId: "task-manager-app-9b1af",
  storageBucket: "task-manager-app-9b1af.appspot.com",
  messagingSenderId: "623629907948",
  appId: "1:623629907948:web:7ebb35d3e5c36f236332c9",
  measurementId: "G-10WL5NM012",
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const db = getFirestore();
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, analytics, auth, db };
