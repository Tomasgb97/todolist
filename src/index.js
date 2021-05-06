import firebase from '../src/firebase';
import domevent from './domevents';

const loginBttn = document.getElementById('loginbutton');
const logoutBttn = document.getElementById('logoutbutton');



const checkState = () => {
    
    if(firebase.user){

    return domevent.domevent.logOut();

    } 
    else { 
        
        return domevent.domevent.login();
    }};



    checkState();




loginBttn.addEventListener('click', function(){
    
    domevent.domevent.logOut()
    firebase.signIn()});

logoutBttn.addEventListener('click', function(){
    
    domevent.domevent.login()
    firebase.signOut()});