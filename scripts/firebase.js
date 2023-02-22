// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLJZf0XAkXyGYmTEOS9cgsv8etE9_aGQs",
  authDomain: "kuraian-github-io.firebaseapp.com",
  projectId: "kuraian-github-io",
  storageBucket: "kuraian-github-io.appspot.com",
  messagingSenderId: "37599108025",
  appId: "1:37599108025:web:c443f93338a653b4a83468",
  measurementId: "G-C4NW93RQEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);