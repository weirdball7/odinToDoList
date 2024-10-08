const projectDialog = (onSubmit) => {
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const descriptionInput = document.createElement('input');
    const dueDateInput = document.createElement('input');
    const priorityInput = document.createElement('input');
    const submitButton = document.createElement('button');

    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Title');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'Description');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('placeholder', 'Due Date');
    priorityInput.setAttribute('type', 'text');
    priorityInput.setAttribute('placeholder', 'Priority');
    submitButton.setAttribute('type', 'submit');
    submitButton.innerText = 'Add';

    form.appendChild(titleInput);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateInput);
    form.appendChild(priorityInput);
    form.appendChild(submitButton);

    dialog.appendChild(form);
    document.body.appendChild(dialog); // Append dialog to the document body
    dialog.showModal(); // Show the dialog

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const project = {
            title: titleInput.value,
            description: descriptionInput.value,
            dueDate: dueDateInput.value,
            priority: priorityInput.value
        };
        dialog.close();
        if (onSubmit) onSubmit(project);
    });
}

export { projectDialog };
