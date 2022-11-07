import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB532-wQJNfVR8URzSI92KVbOj2jWm5rQ4",
  authDomain: "wiftz-podcasts.firebaseapp.com",
  projectId: "wiftz-podcasts",
  storageBucket: "wiftz-podcasts.appspot.com",
  messagingSenderId: "42188632923",
  appId: "1:42188632923:web:fe111d1054c5850054e07e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
