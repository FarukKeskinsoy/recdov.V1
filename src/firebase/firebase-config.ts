import { initializeApp } from "firebase/app";
import {
  getAuth,
  NextOrObserver,
  onAuthStateChanged,
  User
} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCioNIeNCxiCFtImGw3Rntfglqa_UxfiuI",
  authDomain: "recdo-e637d.firebaseapp.com",
  projectId: "recdo-e637d",
  storageBucket: "recdo-e637d.appspot.com",
  messagingSenderId: "585518679743",
  appId: "1:585518679743:web:bbfa6635b12c30ad44a80a"
};
export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.ts');
  } else {
    return firebaseConfig;
  }
}    



