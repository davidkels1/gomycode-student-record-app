//student database store
const studentDatabase = [];

//get form element
const form = document.querySelector('#form');

//constructor function as object template
function Student(firstname, lastname, emailaddress, phonenumber, stgender, stdob, fulladdress, stcountry, ststate, stcity) {
    
}



//function to display array
const grid = document.querySelector('#grid-container');
function render() {
    for (const student of studentDatabase) {
        const card = document.createElement('div');
        card.classList.add('card');
        const h5 = document.createElement('h5');
        h5.classList.add('card title');
        h5.textContent = `${student.firstname} ${student.lastname}`;
        const p = document.createElement('p');
        p.classList.add('card text');
        p.textContent = student.email;

        card.appendChild(p);
        card.appendChild(h5);
    }
    
}