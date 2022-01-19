// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { firebaseConfig } from "./requests";
import 'firebase/auth'

firebase.initializeApp(firebaseConfig);

export default firebase;
