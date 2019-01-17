// db.js

import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyD1hko-IVeKJsdEngYTU3PVOXuBawJsi30",
    authDomain: "finance-f826b.firebaseapp.com",
    databaseURL: "https://finance-f826b.firebaseio.com",
    projectId: "finance-f826b",
    storageBucket: "finance-f826b.appspot.com",
    messagingSenderId: "324915438995"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();