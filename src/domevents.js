
const domevent = (function (){

const loginBttn = document.getElementById('loginbutton');
const logoutBttn = document.getElementById('logoutbutton');

const loggedin = document.querySelectorAll('.toremove');



const login = () => {

    loginBttn.style.display = 'block';
    logoutBttn.style.display ='none';
    loggedin.forEach(element => element.style.visibility = 'hidden');
    
};

const logOut = () => {

    loginBttn.style.display = 'none';
    logoutBttn.style.display ='block';
    loggedin.forEach(element => element.style.visibility ='visible');

    
};

return{login, logOut}
})();

export default {domevent};