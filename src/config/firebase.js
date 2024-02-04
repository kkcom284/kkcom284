import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDYMNT2U_yeuXqKglWy057Bs2q7y11XcxU",

  authDomain: "chat-app-31bd4.firebaseapp.com",
  projectId: "chat-app-31bd4",
  storageBucket: "chat-app-31bd4.appspot.com",
  messagingSenderId: "54374768200",
  appId: "1:54374768200:web:7931801ab303ca6b76827d",
  measurementId: "G-HF9QB9BFQZ",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
