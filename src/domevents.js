
const domevent = (function (){

const mainContainer =document.getElementById('container');
const navleft = document.getElementById('navcontainer');
const navbuttons = navleft.querySelectorAll('button');


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





















const addTask = () => {

    const parts = ["name", "category", "date", "notes"]
    const buttons =[{

        text: 'cancel',
        color: 'red',
    }, 
    {
        text: 'add',
        color: 'green',
    }];


    const container = document.createElement('div');
    container.setAttribute('id', 'addtaskcontainer');

    const inputscontainer =document.createElement('div');
    inputscontainer.setAttribute('id', 'inputscontainer');
    container.appendChild(inputscontainer);


    parts.forEach(part =>{

        if(part != 'notes'){
        
        const partContainer = document.createElement('div');
        const partLabel = document.createElement('label');
        let partInput = document.createElement('input');

        partLabel.textContent = `${part}`;


        partContainer.setAttribute('id', `${part}container`);
        partLabel.setAttribute('id', `${part}label`);
        partInput.setAttribute('id', `${part}input`);


        if(part == 'date'){

            partInput.setAttribute("type", "date");
        }else if (part == 'category'){
            const categories = (document.getElementById('categories')).querySelectorAll('button')
            partInput = document.createElement('select');
            partInput.setAttribute('id', `${part}input`);

            categories.forEach( one => {

                const opts = document.createElement('option');
                opts.value = one.textContent;
                opts.textContent = one.textContent;
                partInput.appendChild(opts);
                
            })
        }

        partContainer.appendChild(partLabel);
        partContainer.appendChild(partInput);

        inputscontainer.appendChild(partContainer);


        }else{
        const partContainer = document.createElement('div');
        const partLabel = document.createElement('label');
        const partInput = document.createElement('textarea');

        partLabel.textContent = `${part}`;


        partContainer.setAttribute('id', `${part}container`);
        partLabel.setAttribute('id', `${part}label`);
        partInput.setAttribute('id', `${part}input`);

        partContainer.appendChild(partLabel);
        partContainer.appendChild(partInput);

        container.appendChild(partContainer);}
        

        
    });







    const buttonsDiv =document.createElement('div');
    buttonsDiv.classList.add('buttonsdiv');
    container.appendChild(buttonsDiv);

    buttons.forEach(thing =>{

        const but = document.createElement('button');
 
        but.textContent = `${thing.text}`;
        but.setAttribute('style', `background-color: ${thing.color}`);
        but.setAttribute('id', `${thing.text}button`);
 
        buttonsDiv.appendChild(but);
 
     })

    mainContainer.appendChild(container);


};




















const rmTaskCointainer = () => {

    const container = document.getElementById('addtaskcontainer');

    container.remove();

};


















 const disableNavbuttons = () => {

    navbuttons.forEach(one => {

        one.setAttribute('disabled', 'true');
    });
 };











 const activateNavbuttons =() => {

    navbuttons.forEach(one => {

        one.removeAttribute('disabled');
    });
 }

return{login, logOut, addTask, rmTaskCointainer, disableNavbuttons, activateNavbuttons}
})();

export default {domevent};