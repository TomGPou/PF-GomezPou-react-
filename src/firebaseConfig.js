import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2EdCoMUoCKXLJx_NsbHxRTmNdDDPWADM",
  authDomain: "blessed-1a1dc.firebaseapp.com",
  projectId: "blessed-1a1dc",
  storageBucket: "blessed-1a1dc.appspot.com",
  messagingSenderId: "317775131815",
  appId: "1:317775131815:web:1b0b8d28ef7b7738985782",
  measurementId: "G-XXDZW1EV4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
