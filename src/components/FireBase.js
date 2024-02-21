// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7PIMXfRccd5MqgNXq5BMPVyO712dzXQo",
  authDomain: "portfolio-94535.firebaseapp.com",
  projectId: "portfolio-94535",
  storageBucket: "portfolio-94535.appspot.com",
  messagingSenderId: "236638951347",
  appId: "1:236638951347:web:fb772b8bd7023e6440ddc6",
  measurementId: "G-4KBR9287TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);
export default analytics;