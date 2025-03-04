// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2xO5mkvYZqWSXIfcA95oCpNC2KquJjKE",
  authDomain: "shadow-810da.firebaseapp.com",
  projectId: "shadow-810da",
  storageBucket: "shadow-810da.firebasestorage.app",
  messagingSenderId: "885882694257",
  appId: "1:885882694257:web:355de08a3446423ef689d0",
  measurementId: "G-VMPZ8YKGWJ"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Exporter les services
export { app, auth, db, analytics };