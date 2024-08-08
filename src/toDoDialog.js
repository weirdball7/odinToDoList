const toDoDialog = (onSubmit) => {
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const descriptionInput = document.createElement('input');
    const dueDateInput = document.createElement('input');
    const priorityInput = document.createElement('input');
    const submitButton = document.createElement('button');
    const closeButton = document.createElement('button'); // Added close button

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
    closeButton.setAttribute('type', 'button'); // Close button type
    closeButton.innerText = 'Close';

    // Ensure the close button click event is working
    closeButton.addEventListener('click', () => {
        console.log('Close button clicked');
        dialog.close(); // Explicitly close the dialog
    });

    // Prevent clicks inside the form from propagating to the window
    form.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Append inputs and buttons to the form
    form.appendChild(titleInput);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateInput);
    form.appendChild(priorityInput);
    form.appendChild(submitButton);
    form.appendChild(closeButton); // Append close button

    // Append form to dialog
    dialog.appendChild(form);

    // Append dialog to the document body and show it
    document.body.appendChild(dialog);
    dialog.showModal();

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = {
            title: titleInput.value,
            description: descriptionInput.value,
            dueDate: dueDateInput.value,
            priority: priorityInput.value
        };
        console.log('Form submitted:', task);
        dialog.close(); // Close the dialog
        if (onSubmit) onSubmit(task);
    });

    // Close the dialog when clicking outside of it
    window.addEventListener('click', (e) => {
        if (dialog.open && !dialog.contains(e.target)) {
            console.log('Clicked outside the dialog');
            dialog.close();
        }
    });

    // Debugging: Log the dialog state
    dialog.addEventListener('close', () => {
        console.log('Dialog closed');
    });
    dialog.addEventListener('cancel', () => {
        console.log('Dialog canceled');
    });
}

export { toDoDialog };