export class Todo {

  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  // Generate Todo
  generate() {
    const todoItem = document.createElement('div');

    const todoTitle = document.createElement('h2');
    todoTitle.innerHTML = this.title;

    const todoDescription = document.createElement('p');
    todoDescription.innerHTML = this.description;

    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDescription);

    return todoItem;
  }

  // Get/Set
  get getTitle() {
    return this.title;
  }

  set setTitle(title) {
    this.title = title;
  }

  get getDescription() {
    return this.description;
  }

  set setDescription(description) {
    this.description = description;
  }
}

export const generate = Todo.prototype.generate;