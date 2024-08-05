import { projectDialog } from './projectDialog.js';
import { toDoDialog } from './toDoDialog.js';
// import {getValues} from toDoDialog;

const createContainers = () => {
    const projectSection = document.createElement('div');
    const projectsTodoContainer = document.createElement('div');
    const projectsContainer = document.createElement('div');
    const projectsHeader = document.createElement('div');
    const projectHeaderP = document.createElement('p');
    const projectHeaderButton = document.createElement('button');
    const toDoButton = document.createElement('button');

    projectSection.classList.add('project-section');
    projectsTodoContainer.classList.add('projects-todo-container');
    projectsContainer.classList.add('projects-container');
    projectsHeader.classList.add('projects-header');
    toDoButton.classList.add('to-do-button');

    projectHeaderP.innerText = 'My Projects';
    projectHeaderButton.innerText = 'Add Project';
    toDoButton.innerText = 'Add todo';

    projectsHeader.appendChild(projectHeaderP);
    projectsHeader.appendChild(projectHeaderButton);

    projectsContainer.appendChild(projectsHeader);

    projectsTodoContainer.appendChild(toDoButton);

    projectSection.appendChild(projectsTodoContainer);
    projectSection.appendChild(projectsContainer);

    document.body.appendChild(projectSection);

    // Event listener to show dialog when button is clicked
    projectHeaderButton.addEventListener('click', () => {
        projectDialog();
    });

    toDoButton.addEventListener('click', () => {
        toDoDialog();
    });


};



export { createContainers };
