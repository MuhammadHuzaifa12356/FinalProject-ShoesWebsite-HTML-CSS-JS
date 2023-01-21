// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzfFG4ydAMxa8SXGZ17dArt1Zq_jq4Vy8",
  authDomain: "fmp-1-abd7d.firebaseapp.com",
  projectId: "fmp-1-abd7d",
  storageBucket: "fmp-1-abd7d.appspot.com",
  messagingSenderId: "950580932961",
  appId: "1:950580932961:web:e6d29a87e2a5cbcb021520",
  measurementId: "G-GZ104HZZF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var contact = document.getElementById("contact");
var name = document.getElementById("name");
var message = document.getElementById("message");

window.clientquery = function () {
  var obj1 = {
    contact: contact.value,
    username: name.value,
    usermessage: message.value,
  };
  obj1.id = Math.random().toString().slice(2);
  let reference2 = ref(database, `clientquery/${obj1.id}/`);
  set(reference2, obj1);
  alert("SENT  SUCCESSFULLY");
  email.value = "";
  name.value = "";
  message.value = "";
  console.log(obj1);
};
