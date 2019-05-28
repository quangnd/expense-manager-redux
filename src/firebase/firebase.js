import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjnq51dJ2cPm_umIAkih4YONcO8BIr8Aw",
  authDomain: "expense-manager-b54f3.firebaseapp.com",
  databaseURL: "https://expense-manager-b54f3.firebaseio.com",
  projectId: "expense-manager-b54f3",
  storageBucket: "expense-manager-b54f3.appspot.com",
  messagingSenderId: "1000366514436",
  appId: "1:1000366514436:web:35d0d0beebd6f370"
};

firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref()
  .set({
    name: "Quang"
  });
