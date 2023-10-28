import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBpZdjRm7SnOB1Pl7zwhXLwQdilrPg1ydQ",
  authDomain: "textutil-c04d0.firebaseapp.com",
  projectId: "textutil-c04d0",
  storageBucket: "textutil-c04d0.appspot.com",
  messagingSenderId: "561899512845",
  appId: "1:561899512845:web:22a216826a6bc8687da144",
  measurementId: "G-EXZMKZVBGV"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const singinUserWithEmailAndPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);


  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        signupUserWithEmailAndPassword,
        singinUserWithEmailAndPass,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};