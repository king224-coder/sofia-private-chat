import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrrtZUDzER0acEggVlwhfL_JV5gMkmfjw",
  authDomain: "sofiaprivatechat-bfa0e.firebaseapp.com",
  projectId: "sofiaprivatechat-bfa0e",
  storageBucket: "sofiaprivatechat-bfa0e.appspot.com",
  messagingSenderId: "475737605844",
  appId: "1:475737605844:web:4ab5640b8c822715259d41",
  databaseURL: "https://sofiaprivatechat-bfa0e-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { db, rtdb };
