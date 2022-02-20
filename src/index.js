import Todo from "./todo";
import TodoProject from "./todoProject";

import loadNavbar from "./navbar";

const projects = [];

// Function for checking if local storage is available
function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

// Save and load a todo in or from an array of Todo objects
function save() {
  if (storageAvailable('localStorage')) {
    localStorage.setItem('projects', JSON.stringify(projects));
  } else {
    console.log('No local world!');
  }
}

function load(storageName) {
  if (storageAvailable('localStorage')) {
    let text = localStorage.getItem(storageName);
    let temp = JSON.parse(text);

    for (let i=0; i<temp.length; i++) {
      let tempProject = new TodoProject(temp[i].name);
      for (let x=0; x<temp[i].todoItems.length; x++) {
        let tempTitle = temp[i].todoItems[x].title;
        let tempDesc = temp[i].todoItems[x].description;
        let tempDate = temp[i].todoItems[x].dueDate;
        let tempPriority = temp[i].todoItems[x].priority;
        let tempTodo = new Todo(tempTitle, tempDesc, tempDate, tempPriority);
        tempProject.addTodo(tempTodo);
      }
      projects.push(tempProject);
    }
  } else {
    console.log("No local world!");
  }
}

function run() {
  load('projects');
  document.body.appendChild(loadNavbar(projects));
}

run();