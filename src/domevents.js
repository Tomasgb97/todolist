import firebase from '../src/firebase'
const domevent = (function (){

const loginBttn = document.getElementById('loginbutton');
const logoutBttn = document.getElementById('logoutbutton');


const login = () => {

    loginBttn.style.display = 'block';
    logoutBttn.style.display ='none';
};

const logOut = () => {

    loginBttn.style.display = 'none';
    logoutBttn.style.display ='block';
    
};

return{login, logOut}
})();

export default {domevent};