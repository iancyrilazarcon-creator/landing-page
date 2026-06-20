import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6fs7BTlaMCvdxoDBOlopT-ykDy3m-Q4U",
  authDomain: "japan-quest-653e9.firebaseapp.com",
  projectId: "japan-quest-653e9",
  storageBucket: "japan-quest-653e9.firebasestorage.app",
  messagingSenderId: "46094970052",
  appId: "1:46094970052:web:9f34259595e96514d5ad91"
};

const app = initializeApp(firebaseConfig);

export { app };