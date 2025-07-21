// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBrrtZUDzER0acEggVlwhfL_JV5gMkmfjw",
  authDomain: "sofiaprivatechat-bfa0e.firebaseapp.com",
  projectId: "sofiaprivatechat-bfa0e",
  storageBucket: "sofiaprivatechat-bfa0e.appspot.com",
  messagingSenderId: "475737605844",
  appId: "1:475737605844:web:4ab5640b8c822715259d41"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
