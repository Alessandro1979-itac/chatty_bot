import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCBElhQ6-0M2TDWmOyrwmEVBGqFajifXzA",
  authDomain: "chatty-635a7.firebaseapp.com",
  databaseURL: "https://chatty-635a7.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();