// function needs to add object to array and close pop up 

import { Task } from './index.js'
import { myTasks } from './index.js'
import { display } from './index.js'
import { priorityLevel } from './index.js'
import { priorityCheck } from './index.js'


export function addTask() {
    event.preventDefault(); 
    document.getElementById('formSpace').style.display = "none"
    priorityCheck ();
    const newTask = new Task(title, description, dueDate, priorityLevel); 
    myTasks.push(newTask);


    display();

}
