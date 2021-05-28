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
  const alldb = firebase.firestore().collection('all');


  const signIn = () => {auth.signInWithPopup(provider)};
  const getOut = () => {auth.signOut()};
  let userState;


  auth.onAuthStateChanged(user => { 
    if (user){
    userState = true;
    }

    else{
      userState = false;
    };

  });

  const newAct = (name, category, date, notes) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        alldb.add({
          name,
          category,
          date,
          notes,
          finished: false,
          user: user.uid
        });
      }
    })
    

  }

  

 



  export default {userState, signIn, getOut, newAct}