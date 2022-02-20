export default class Todo {

  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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