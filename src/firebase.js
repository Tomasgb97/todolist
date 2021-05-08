import firebase from'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


  const app = firebase.initializeApp({
    apiKey: "AIzaSyBjwyLQUDQKKUh7Is5fnA_e-TfssCprO7s",
    authDomain: "todo-5c3d1.firebaseapp.com",
    projectId: "todo-5c3d1",
    storageBucket: "todo-5c3d1.appspot.com",
    messagingSenderId: "690765416040",
    appId: "1:690765416040:web:800a36dae046b7b3471ddd",
    measurementId: "G-FWQVTY289R"
  });

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  const signIn = () => {auth.signInWithPopup(provider)};
  const getOut = () => {auth.signOut()
    .then (()=> {
    console.log('User signed out');
  })
  .catch ((e)=> {
    console.log('error', e);
  })};



  const user = auth.onAuthStateChanged(user => {

    if (user){

      return true
    }else {return false};
  });



  export default {user, signIn, getOut};