
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBcPnJFKIOnmV38-CTCIiZCENEPIiI8gSk",
  authDomain: "tutorial-3a139.firebaseapp.com",
  projectId: "tutorial-3a139",
  storageBucket: "tutorial-3a139.appspot.com",
  messagingSenderId: "758312316296",
  appId: "1:758312316296:web:f8d3d784281869517e5e3d",
  measurementId: "G-HHHBQ8902F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export { app, auth };
