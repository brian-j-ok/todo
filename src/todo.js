export default class Todo {

  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  generate() {
    const div = document.createElement('div');
    div.classList.add('todo');

    const h = document.createElement('h2');
    h.innerHTML = this.title;

    const p = document.createElement('p');
    p.innerHTML = this.description;

    div.appendChild(h);
    div.appendChild(p);

    return div;
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