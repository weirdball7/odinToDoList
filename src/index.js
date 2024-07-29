import './styles.css';
import { createComtainers } from './update';

createComtainers();


// facroty for to do item
function todoItem(title, description, dueDate, priority)  {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    return { title, description, dueDate, priority };
}







