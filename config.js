import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBODGJuWzdqwA4rblvwqK_ARm934VUwQMs",
  authDomain: "pro-71-ad52e.firebaseapp.com",
  projectId: "pro-71-ad52e",
  storageBucket: "pro-71-ad52e.appspot.com",
  messagingSenderId: "601526704767",
  appId: "1:601526704767:web:4b96a8c62f8b806b45fd4a"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
