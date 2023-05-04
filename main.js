
// ************ REFERENCE STUDENT ARRAYS ***************
const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Cho Chang",
    house: "Ravenclaw",
  },
  {
    id: 3,
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
  },
];

const expelledStudents = [];

//  ***** MASTER FUNCTION TO RENDER TO DOM *****
//The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
const renderToDom = (divId, htmlToRender) => {
  //renderToDom function takes in two parameters: "divId" and "htmlToRender"  
  const selectedDiv = document.querySelector(divId);
  //HTML element is selected with an ID of "divId" passed as an argument using "querySelector" method of the document object, and assigns it to variable "selectedDiv"
  selectedDiv.innerHTML = htmlToRender;
  //This is setting the "innerHTML" of the "selectedDiv" element to the "htmlToRender" argument passed to the "renderToDom" function which replaces any HTML content already inside the selected element with the new html content. It reassigns new html to the innerHTML of the selectedDiv.
}

// ********* HOME PAGE ************
const welcome = () => {
  let welcomeString = `<div class="navigationBar">
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Sorting Hat</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Students</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Expelled</a>
          </li>
        </ul>
        <span class="navbar-text">
          Hogwarts Class 2023-2024
        </span>
      </div>
    </div>
  </nav>
</div>
<div class="Introduction">
  <div class="card">
    <div class="card-header">
      Welcome to Hogwarts School of Wizardry
    </div>
    <div class="card-body-greeting" style="border: 10px solid darkgrey; margin: 10px">
      <h5 class="card-title">Assignment System</h5>
      <p class="card-text">Welcome aspiring students! Please click the button below to begin the initation and House assignment process..</p>
      <a href="#" class="btn btn-primary" id="showForm" style="margin-bottom: 10px">Access Sorting Hat</a>
    </div>
  </div>
</div>`;
  renderToDom("#welcome", welcomeString);
}
welcome()

// ** STUDENTS TITLE - required me to create another div within the domstring on top of a div in the HTML and if I dont it breaks the code. No idea why this is happening.. ********
const studentTitle = () => {
  let domString = `<h2 id="firstYearsTitle">First Year Students</h2><div class="float-container" id="firstYears">
  <div style="border-color: blanchedalmond" id="studentCards"></div>`;
  renderToDom('#firstYears', domString);
};

// ** EXPELLED STUDENTS - required me to create another div within the domstring on top of a div in the HTML and if I dont it breaks the code. No idea why this is happening.. ********
const expelledTitle = () => {
  let domString = `<h2 id="voldemortArmy">Voldemort's Army</h2><div class="float-container" id="voldArmy">
  <div id="expelledCards"></div>
  </div>
</div>`;
  renderToDom(`#voldArmy`, domString);
};

// **** USER NAME INPUT FORM *****
const studentSortForm = () => {
  let domString = `<form id="nameForm">
  <div class="mb-3">
    <label for="student-name" class="form-name"></label>
    <input type="text" class="form-control" id="inputNewStudent" id="validation" value="" required style="max-width:25%; margin:auto; font=font-family: 'Jost', sans-serif;
    font-family: 'Oswald', sans-serif;
    font-family: 'PT Sans', sans-serif;
    font-family: 'Shadows Into Light', cursive;" placeholder="Enter First Year's Name" aria-describedby="studentName">
    <div id="emailHelp" class="form-text"></div>
  </div>
  
  <button type="submit" class="row d-flex justify-content-center align-content-center"  class="sortFilterButton" id="sortButton" style="margin: auto; background-color: rgb(0, 128, 255); color: white; border-color: rgb(0, 128, 255); border-radius: 5px; ">Sort</button>
  </form>
  
  <div class="houseBorder"; margin: 10px">
    <div class="btn-group" class="houses" style="display:flex; justify-content: center; margin-left: 50px; margin-right: 50px; margin-bottom: 10px; font=font-family: 'Jost', sans-serif;
    font-family: 'Oswald', sans-serif;
    font-family: 'PT Sans', sans-serif;
    font-family: 'Shadows Into Light', cursive;" role="group" aria-label="Basic mixed styles example">
    </div>
  </div>`;
    renderToDom('#studentSortForm', domString);
};

//******** STUDENT CARDS *******
const showStudentCards = (array) => {
  let domString = "";
  for (student of array) {
    domString += `<div class="card mb-3" style="display: inline-block; max-width: 50%">
    <div class="row g-0">
      <div class="col-md-4"></div>
        <div class="card-body">
          <p class="card-text">${student.name}</p>
          <p class="card-text">${student.house}</p>
          <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
        </div>
      </div>
    </div>
  </div>`;
  }
  renderToDom("#studentCards", domString);
};

//********* EXPELLED STUDENT CARDS **********
const showExpelledCards = (array) => {
  let domString = "";
  for (student of array) {
    domString += `<div class="card mb-3" style="display: inline-block">
    <div class="row g-0">
      <div class="col-md-4">
      </div>
        <div class="card-body">
          <p class="card-text">${student.name}</p>
          <p class="card-text">${student.house}</p>
          <button class="btn btn-danger" id="delete--${student.id}">Expelled</button>
        </div>
      </div>
    </div>
  </div>`;
  }
  renderToDom("#expelledCards", domString);
};

// ****** EXPELLED CARDS FUNCTION ******
const expelledStudentsFunction = document.querySelector("#studentCards");

expelledStudentsFunction.addEventListener('click', (e) => {
  alert(e.target.id);
  const [, id] = e.target.id.split("--");
  const index = students.findIndex(student => student.id === Number(id));
  expelledStudents.push(...students.splice(index, 1));
  showStudentCards(students);
  showExpelledCards(expelled);
});

// ******** FILTER BUTTONS *********
const filterHouseButtons = () => {
  let domString = `<div class="houseBorder" style="border: 10px solid darkgrey; margin: 10px">
  <h3 id="filterHeader" style="text-align:center; font-size: 10px, bold; font=font-family: 'Jost', sans-serif;
  font-family: 'Oswald', sans-serif;
  font-family: 'PT Sans', sans-serif;
  font-family: 'Shadows Into Light', cursive; margin-top: 2rem">Filter Students</h3>
  <div class="btn-group" class="houses" style="display:flex; justify-content: center; margin-left: 50px; margin-right: 50px; margin-bottom: 10px; font=font-family: 'Jost', sans-serif;
  font-family: 'Oswald', sans-serif;
  font-family: 'PT Sans', sans-serif;
  font-family: 'Shadows Into Light', cursive;" role="group" aria-label="Basic mixed styles example">
    <button type="button" class="btn btn-secondary" id="all">All</button>
    <button type="button" class="btn btn-danger" id="gryffindor">Gryffindor</button>
    <button type="button" class="btn btn-warning" id="hufflepuff">Hufflepuff</button>
    <button type="button" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
    <button type="button" class="btn btn-success" id="slytherin">Slytherin</button>
  </div>`;
  renderToDom("#filterHouseButtons", domString);
};

//Function that takes an array and a value as arguments, in this case the value is "houseString". The function will filter through an array of objects, in this case the object array is "students", based on the selected value of "house" returning a newly created array of objects only containing the matching value selected to filter, "house". Another way of writing this filter is 
//function filter(array, value) {
//  return array.filter(item => item.house === value);  
//};
//array.filter methos creates new array with all elements clearing the function's test parameters. This test is taking an item from the array and checking to see if the house property is equal to the given value. If they match, the item is added to the new array being returned by the filter() method.

const filter = (array, houseString) => {
  const filteredStudentArray = [];
  // **** for of loop requires the name of the array "object" to be passed in with the structure it is within, which is an "array" not the actual name of the array so its passed "array" as evidenced below this line *******
  for(const student of array) {
    if(student.house === houseString){
      filteredStudentArray.push(student);
    }
  }
    console.log(filteredStudentArray);
  return filteredStudentArray;
};

const filterButtons = () => {
  const showAll = document.querySelector("#all");
  //html element ID "all" is selected and assigned to variable "showAll" with querySelector method of document object. The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The querySelector method allows the targeting of an ID tag "#" with the specific ID name assigned to it.
  const showGryffindor = document.querySelector("#gryffindor");
  const showHufflepuff = document.querySelector("#hufflepuff");
  const showRavenclaw = document.querySelector("#ravenclaw");
  const showSlytherin = document.querySelector("#slytherin");

  showAll.addEventListener('click', () => showStudentCards(students));
  //An event condition or 'listener' is assigned to the variable "showAll" representing the "all" element triggering a callback function upon click of the button.

  showGryffindor.addEventListener('click', () => {
    const showAllGryffindor = filter(students, 'Gryffindor');
    //console log is added on this function to reveal that the cards are actually being called/filtered as expected, but they were not rendering due to an error in the parent filter function involving correct name/value pairs; "array".
    console.log(showAllGryffindor);
    showStudentCards(showAllGryffindor);
  });

  showHufflepuff.addEventListener('click', () => {
    const showAllHufflepuff = filter(students, "Hufflepuff");
    console.log(showAllHufflepuff);
    showStudentCards(showAllHufflepuff);
  });

  showRavenclaw.addEventListener('click', () => {
    const showAllRavenclaw = filter(students, 'Ravenclaw');
    console.log(showAllRavenclaw);
    showStudentCards(showAllRavenclaw);
  });

  showSlytherin.addEventListener('click', () => {
    const showAllSlytherin = filter(students, 'Slytherin');
    console.log(showAllSlytherin);
    showStudentCards(showAllSlytherin);
  });
};

//*********** CREATE NEW STUDENT FORM **********
const createStudent = () => {
  const studentForm = document.querySelector('form');

  const sortForm = (e) => {
    // e.preventDefault();

    const random = Math.floor(Math.random() * 4) +1;

    let randomHouse = ""
    switch (random) {
      case 1:
        randomHouse = "Gryffindor";
        break;
      case 2:
        randomHouse = "Hufflepuff";
        break;
      case 3:
        randomHouse = "Ravenclaw";
        break;
      case 4:
        randomHouse = "Slytherin";
        break; 
    }
    const newCreatedStudent = {
      id: students.length +1,
      name: document.querySelector("#inputNewStudent").value,
      house: randomHouse,
    }
    students.push(newCreatedStudent);
    showStudentCards(students);
  }
  //The “#submit” button was formerly the “#sortButton” . I made it sortButton because I gave an ID to the button responsible for the click event, but apparently the instructors agreed it needed to be changed to the TYPE of button responsible instead, which was type=submit and so form reset required it as the location to listen for as seen below this line:
  studentForm.addEventListener("submit", (e) => {
    if (document.getElementById("inputNewStudent").value === "") {
      alert("Please input name");
    } else {sortForm()};
    e.preventDefault();
    // Form reset MUST be named after the variable/const it was assigned  *******
    studentForm.reset();
  }); 
};

//studentForm.addEventListener("submit", sortForm); ****
// ********** EVENT LISTENERS **********
const sortButton = document.querySelector("#showForm");
sortButton.addEventListener('click', (e) => {
  studentTitle();
  expelledTitle();
  studentSortForm();
  createStudent();
  filterHouseButtons();
  filterButtons();
  showStudentCards(students);
  showExpelledCards(expelledStudents);
})
