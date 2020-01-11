import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAQaIXIvWqLqX04POyy-cYzzrXI-b9zeEE",
  authDomain: "crwn-db-ec692.firebaseapp.com",
  databaseURL: "https://crwn-db-ec692.firebaseio.com",
  projectId: "crwn-db-ec692",
  storageBucket: "crwn-db-ec692.appspot.com",
  messagingSenderId: "390509062424",
  appId: "1:390509062424:web:f831d6e28e24601cfa166d",
  measurementId: "G-R8SK8KZW1C"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;





