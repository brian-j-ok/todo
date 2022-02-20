export default class TodoProject {

  todoItems = [];

  constructor(name) {
    this.name = name;
  }

  // Add new todo item to project
  addTodo(todoItem) {
    this.todoItems.push(todoItem);
  }

  // Print project todos
  printProject() {
    let projectName = document.createElement('h1');
    projectName.innerHTML = this.name;
    document.body.appendChild(projectName);

    this.todoItems.forEach(todo => {
      let newTodo = new Todo(todo.title, todo.description, todo.dueDate, todo.priority);
      document.body.appendChild(newTodo.generate());
    });
  }
}