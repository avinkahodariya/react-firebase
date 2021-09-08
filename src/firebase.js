import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../config";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCWLO0UyRlfzxjnIyrUa8_uoq9a-OC9a4",
  authDomain: "fir-react-e457b.firebaseapp.com",
  projectId: "fir-react-e457b",
  storageBucket: "fir-react-e457b.appspot.com",
  messagingSenderId: "580035907925",
  appId: "1:580035907925:web:dd97f289fce72539041fdc",
  measurementId: "G-53SR9TEZGV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
