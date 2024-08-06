import { projectDialog } from './projectDialog.js';
import { toDoDialog } from './toDoDialog.js';

const createContainers = () => {
    const projectSection = document.createElement('div');
    const projectsTodoContainer = document.createElement('div');
    const projectsContainer = document.createElement('div');
    const projectsHeader = document.createElement('div');
    const projectHeaderP = document.createElement('p');
    const projectHeaderButton = document.createElement('button');
    const toDoButton = document.createElement('button');
    const taskList = document.createElement('ul'); // Task list container
    const projectList = document.createElement('ul'); // Project list container

    projectSection.classList.add('project-section');
    projectsTodoContainer.classList.add('projects-todo-container');
    projectsContainer.classList.add('projects-container');
    projectsHeader.classList.add('projects-header');
    toDoButton.classList.add('to-do-button');

    projectHeaderP.innerText = 'My Projects';
    projectHeaderButton.innerText = 'Add Project';
    toDoButton.innerText = 'Add Todo';

    projectsHeader.appendChild(projectHeaderP);
    projectsHeader.appendChild(projectHeaderButton);

    projectsContainer.appendChild(projectsHeader);
    projectsContainer.appendChild(projectList); // Append project list
    projectsTodoContainer.appendChild(toDoButton);
    projectsTodoContainer.appendChild(taskList); // Append task list

    projectSection.appendChild(projectsTodoContainer);
    projectSection.appendChild(projectsContainer);

    document.body.appendChild(projectSection);

    // Event listener to show project dialog when button is clicked
    projectHeaderButton.addEventListener('click', () => {
        projectDialog(createProject);
    });

    // Event listener to show to-do dialog when button is clicked
    toDoButton.addEventListener('click', () => {
        toDoDialog(createTask);
    });
};

const createTask = (task) => {
    const taskItem = document.createElement('li');
    taskItem.innerText = `${task.title}: ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority})`;
    const taskList = document.querySelector('.projects-todo-container ul');
    if (taskList) taskList.appendChild(taskItem);
}

const createProject = (project) => {
    const projectItem = document.createElement('li');
    projectItem.innerText = `${project.title}: ${project.description} (Due: ${project.dueDate}, Priority: ${project.priority})`;
    const projectList = document.querySelector('.projects-container ul');
    if (projectList) projectList.appendChild(projectItem);
}

export { createContainers };
