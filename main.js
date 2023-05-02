//  ************ MASTER FUNCTION TO RENDER TO DOM ***********
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

// ************ REFERENCE STUDENT ARRAYS ***************
const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor"
  },
  {
    id: 2,
    name: "Cho Chang",
    house: "Ravenclaw"
  },
  {
    id: 3,
    name: "Cedric Diggory",
    house: "Hufflepuff"
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin"
  },
];

const expelledStudents = [];

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

//input form
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
  for (student of students) {
    domString += `<div class="card mb-3" style="display: inline-block; max-width: 50%">
    <div class="row g-0">
      <div class="col-md-4">
      </div>
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

const filter = (array, houseString) => {
  const filteredStudentArray = [];
  for(const student of array) {
    if(student.house === houseString){
      filteredStudentArray.push(student);
    }
  }
  return filteredStudentArray;
};

const filterButtons = () => {
  const showAll = document.querySelector("#all");
  const showGryiffindor = document.querySelector("#gryffindor");
  const showHufflepuff = document.querySelector("#hufflepuff");
  const showRavenclaw = document.querySelector("#ravenclaw");
  const showSlytherin = document.querySelector("#slytherin");

  showAll.addEventListener('click', () => showStudentCards(students));
  
  showGryiffindor.addEventListener('click', () => {
    const showAllGryffindor = filter(students, 'Gryffindor');
    showStudentCards(showAllGryffindor);
  });

  showHufflepuff.addEventListener('click', () => {
    const showAllHufflepuff = filter(students, 'Gryffindor');
    showStudentCards(showAllHufflepuff);
  });

  showRavenclaw.addEventListener('click', () => {
    const showAllRavenclaw = filter(students, 'Gryffindor');
    showStudentCards(showAllRavenclaw);
  });

  showSlytherin.addEventListener('click', () => {
    const showAllSlytherin = filter(students, 'Gryffindor');
    showStudentCards(showAllSlytherin);
  });
};

//*********** CREATE NEW STUDENT FORM **********
const createStudent = () => {
  const studentForm = document.querySelector('form');
  const sortForm = (e) => {
    e.preventDefault();

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
    form.reset();
  }
  studentForm.addEventListener("#sortButton", sortForm); 
};

// ********** EVENT LISTENERS **********
const sortButton = document.querySelector("#showForm");
sortButton.addEventListener('click', (e) => {
  studentTitle();
  expelledTitle();
  studentSortForm();
  createStudent();
  filterHouseButtons();
  filterButtons();
  // showStudentCards(students);
  // showExpelledCards(expelledStudents);
})
