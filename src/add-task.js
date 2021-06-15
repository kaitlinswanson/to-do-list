// function needs to add object to array and close pop up 

import { Task } from './index.js'
import { myTasks } from './index.js'
import { display } from './index.js'

//PRIORITY LEVEL NEEDS TO BE ADDED BACK AS PARAM
export function addTask() {
    event.preventDefault(); 
    document.getElementById('formSpace').style.display = "none"

    const newTask = new Task(title, description, dueDate); 
    myTasks.push(newTask);


    display();

}
