import firebase from 'firebase/app';
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
const coll = firebase.firestore().collectionGroup('all');


const signIn = () => { auth.signInWithPopup(provider) };
const getOut = () => { auth.signOut() };
let userState;
let userId;


auth.onAuthStateChanged(user => {
  if (user) {
    userState = true;
    userId = user.uid;

  }

  else {
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
        user: user.uid,
      });
    }
  })

}

const BringAllTopics = (func) => {    //Brings all the topics from a user

  alldb
    .where('user', '==', userId)
    .get()
    .then((snapshot) => {

      snapshot.docs.map(doc => func(doc.data(), doc.id, fbRemove, fbUpdate));

    })
    .catch(error => {
      console.log('fallo promesa');
    });
}

const BringCategories = (func) => {         //Brings all the user categories to generate categories buttons

  alldb
    .where('user', '==', userId)
    .get()
    .then((snapshot) => {

      snapshot.docs.forEach(doc => func(doc.data().category));

    })
    .catch(error => {
      console.log('fallo promesa');
    });
}

const BringThisEvents = (func, category) => {       //Brings only the called category activities

  coll
    .where('user', '==', userId)
    .where('category', '==', category)
    .get()
    .then((snapshot) => {
      console.log('nannana')
      snapshot.docs.map(doc =>  func(doc.data(), doc.id, fbRemove, fbUpdate))
     
     

    })
    .catch(error => {
      console.log(error);
    });
}

const fbRemove = (id) => {

  alldb.doc(id).delete();
}

const fbUpdate = (id, newnote) => {

  alldb.doc(id).update({

    notes: newnote
  })
}





export default { userState, signIn, getOut, newAct, BringAllTopics, BringCategories, BringThisEvents, fbRemove, fbUpdate }