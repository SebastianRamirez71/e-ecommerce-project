import firebase from "firebase/compat/app"
import "firebase/compat/auth"


export const app = firebase.initializeApp({
    "projectId": "web-ecommerce-e1f2b",
    "appId": "1:881493659684:web:61bf1ac62ee96a5b7fc8b1",
    "databaseURL": "https://web-ecommerce-e1f2b-default-rtdb.firebaseio.com",  
    "storageBucket": "web-ecommerce-e1f2b.appspot.com",
    "apiKey": "AIzaSyC4mHKZxqeDZkh0XVzskV4zLPj8Dz_HczU",
    "authDomain": "web-ecommerce-e1f2b.firebaseapp.com",
    "messagingSenderId": "881493659684",
    "measurementId": "G-L9B5WS32TB"
  });