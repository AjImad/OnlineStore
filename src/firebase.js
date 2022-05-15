import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  FacebookAuthProvider
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyB6DQ2tkQYL8J_FM76tQ06bRw1crTqPhIk",
    authDomain: "olinestore-80cfa.firebaseapp.com",
    projectId: "olinestore-80cfa",
    storageBucket: "olinestore-80cfa.appspot.com",
    messagingSenderId: "969040163211",
    appId: "1:969040163211:web:a2267c8a93f08f1d9dff8e",
    measurementId: "G-MBK7VYY02H"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try{
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res)
    const user = res.user;
    const q = query(collection(db,"users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if(docs.docs.length === 0){
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch(err){
    console.error(err);
    alert(err.message);
  }
};

const facebookProvider = new FacebookAuthProvider();
const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    const user = res.user;
    console.log(res)
    const q = query( collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if(docs.docs.length === 0){
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'facebook',
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message)
  }
}

// function for signin using an email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    // console.error(err);
    alert(err.message);
  }
};

// function for registering a user with an email and password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

// create function that will send a password reset link to an email address
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

//logout function:
const logout = () => {
  signOut(auth);
}

export {
  auth,
  signInWithGoogle,
  signInWithFacebook,
  // logInWithEmailAndPassword,
  // registerWithEmailAndPassword,
  sendPasswordReset,
  logout
};

export default db;

