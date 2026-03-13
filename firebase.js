// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwyxGNhzZ5NzaZu8hShR5m5qEE9fz3qgU",
  authDomain: "techcompassgiris.firebaseapp.com",
  projectId: "techcompassgiris",
  storageBucket: "techcompassgiris.firebasestorage.app",
  messagingSenderId: "414744926402",
  appId: "1:414744926402:web:c1ed2830a6f6acae4e435b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
