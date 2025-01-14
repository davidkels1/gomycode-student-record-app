<<<<<<< HEAD
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
=======
// Student database store
const studentDatabase = [];

// get forms elemen
const form = document.querySelector('#form');

// constructor function as object template
function Student(firstname, lastname, emailaddress, phonenumber, stgender, stdob, stpob, fulladdress, stcountry, ststate, stcity) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = emailaddress;
    this.phone = phonenumber;
    this.gender = stgender;
    this.dob = stdob;
    this.pob = stpob;
    this.address = fulladdress;
    this.country = stcountry;
    this.state = ststate;
    this.city = stcity;
}
// function to create object
function createObj() {
    // get form values
    const fname = document.querySelector('#firstName').value;
    const lname = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phoneNumber').value;
    const gender = document.querySelector('#gender').value;
    const dob = document.querySelector('#dob').value;
    const pob = document.querySelector('#pob').value;
    const address = document.querySelector('#address').value;
    const country = document.querySelector('#country').value;
    const state = document.querySelector('#state').value;
    const city = document.querySelector('#city').value;

    const studentObj = new Student(fname, lname, email, phone, gender, dob, pob, address, country, state, city);
    return studentObj;
}

// store studentsData in local storage
function storeData(studentObj) {
    // check if local storage is empty
    if (localStorage.getItem('studentsData') === null) {
        // add data to local storage
        localStorage.setItem('studentsData', JSON.stringify(studentDatabase));
    } else {
        // get data from local storage
        const studentsData = JSON.parse(localStorage.getItem('studentsData'));
        // add data to local storage
        studentsData.push(studentObj);
        localStorage.setItem('studentsData', JSON.stringify(studentsData));
    }
}

// function to add object to array
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const newStudent = createObj()
    studentDatabase.push(newStudent);
    // store data in local storage
    storeData(newStudent);
    console.log(studentDatabase);
    // function to clear form
    form.reset();
});
>>>>>>> 62d0524b1791e36c03d4b05752e1502de788a6d9
