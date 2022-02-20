import Todo from "./todo";
import TodoProject from "./todoProject";

export default function loadNavbar(projects) {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  // Inbox - List all todos regardless of projects

  // Projects
  projects.forEach(project => {
    const projectNav = document.createElement('div');
    projectNav.innerHTML = project.name;

    project.todoItems.forEach(todo => {
      const projectTodo = document.createElement('div');
      projectTodo.innerHTML = todo.title;
      projectNav.appendChild(projectTodo);
    })

    navbar.appendChild(projectNav);
  });

  return navbar
}