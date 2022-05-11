// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJXT3mPNwoyhaAjtyDcA_o-99UfTQGUFk",
  authDomain: "ariantiendacesde.firebaseapp.com",
  projectId: "ariantiendacesde",
  storageBucket: "ariantiendacesde.appspot.com",
  messagingSenderId: "308645811432",
  appId: "1:308645811432:web:c53e691100a85b3072a55d",
  measurementId: "G-VQR6PMTZ3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);