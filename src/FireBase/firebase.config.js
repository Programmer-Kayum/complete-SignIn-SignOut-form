// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpvNK1v--fwG_myZjVmFFGJZcbxCSfgTA",
  authDomain: "context-projects-3c44e.firebaseapp.com",
  projectId: "context-projects-3c44e",
  storageBucket: "context-projects-3c44e.firebasestorage.app",
  messagingSenderId: "684707711745",
  appId: "1:684707711745:web:dea6cb48f6b68827b1a900",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
