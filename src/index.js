import Todo from "./todo";
import TodoProject from "./todoProject";

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
function save(todoProject) {
  if (storageAvailable('localStorage')) {
    console.log("Hello, World!");
    localStorage.setItem("todos", JSON.stringify(todoProject.getTodoItems()));
  } else {
    console.log('No local world!');
  }
}

function load(storageName) {
  if (storageAvailable('localStorage')) {
    let text = localStorage.getItem(storageName);
    return JSON.parse(text);
  } else {
    console.log("No local world!");
  }
}

function run() {
  let todoProject = load("todos");
  todoProject.forEach(todo => {
    todoProject.addTodo(todo);
  });
}

const testProject = new TodoProject("default");
const todo1 = new Todo("Test1", "First Test", "N/A", "N/A");
const todo2 = new Todo("Test2", "Second Test", "N/A", "N/A");
testProject.addTodo(todo1);
testProject.addTodo(todo2);
console.log(testProject.todoItems[1].title);