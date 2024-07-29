const createComtainers = () => {
    const projectSection = document.createElement('div');
    const projectsTodoContainer = document.createElement('div');
    const projectsContainer = document.createElement('div');
    const projectsHeader = document.createElement('div');
    const projectHeaderP = document.createElement('p');
    const projectHeaderButton = document.createElement('button');

    projectSection.classList.add('project-section');
    projectsTodoContainer.classList.add('projects-todo-container');
    projectsContainer.classList.add('projects-container');
    projectsHeader.classList.add('projects-header');

    projectHeaderP.innerText = 'My Projects';
    projectHeaderButton.innerText = 'Add Project';

    projectsHeader.appendChild(projectHeaderP);
    projectsHeader.appendChild(projectHeaderButton);

    projectsContainer.appendChild(projectsHeader);

    projectSection.appendChild(projectsTodoContainer);
    projectSection.appendChild(projectsContainer);

    document.body.appendChild(projectSection);
};

export { createComtainers };