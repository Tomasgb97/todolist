import firebase from '../src/firebase';
import domevent from './domevents';

const loginBttn = document.getElementById('loginbutton');
const logoutBttn = document.getElementById('logoutbutton');
const addtaskBttn = document.getElementById('addtask')


const checkState = () => {
    
    if(firebase.user()){

    domevent.domevent.logOut();

    } 
    else { 
        
     domevent.domevent.login();
    }};



    checkState();




loginBttn.addEventListener('click', function(){
    
    domevent.domevent.logOut()
    firebase.signIn()});

logoutBttn.addEventListener('click', function(){
    
    domevent.domevent.login();
    firebase.getOut();
    domevent.domevent.rmTaskCointainer();
    domevent.domevent.activateNavbuttons();
    });

    addtaskBttn.addEventListener('click', function(){

        domevent.domevent.addTask();
        domevent.domevent.disableNavbuttons();

        const addTaskAdd = document.getElementById('addbutton');
        const addTaskCancel = document.getElementById('cancelbutton');

        addTaskAdd.addEventListener('click', addbuttonfunc);
        addTaskCancel.addEventListener('click', removebuttonfunc);
    });


    const addbuttonfunc = () => {

    const nameinput = document.getElementById('nameinput');
    const categoryinput = document.getElementById('categoryinput');
    const dateinput = document.getElementById('dateinput');
    const notesinput = document.getElementById('notesinput');

        domevent.domevent.rmTaskCointainer();
        domevent.domevent.activateNavbuttons();
        firebase.newAct(nameinput.value, categoryinput.value, dateinput.value, notesinput.value);

    };



    const removebuttonfunc =() => {

        domevent.domevent.rmTaskCointainer();
        domevent.domevent.activateNavbuttons();
    };