// function needs to add object to array and close pop up 

import { Task } from './index.js'
import { myTasks } from './index.js'


export function addTask() {
    const task = new Task(title, dueDate, description, priorityLevel); 
    myTasks.push(task);

    document.getElementById('formSpace').style.display = "none"
}
