import { myTasks } from './index.js'



export function createTask(item) {
    const taskDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const dueDateDiv = document.createElement('div');
   // const priorityLevel = document.createElement('div');

    taskDiv.classList.add('tasks'); 
    taskDiv.setAttribute('id', myTasks.indexOf(item)); 

    titleDiv.textContent = item.title; 
    titleDiv.classList.add('title'); 
    taskDiv.appendChild(titleDiv); 

    descriptionDiv.textContent = item.description; 
    descriptionDiv.classList.add('description'); 
    taskDiv.appendChild(descriptionDiv); 

    dueDateDiv.textContent = item.dueDate; 
    dueDateDiv.classList.add('dueDate'); 
    taskDiv.appendChild(dueDateDiv); 

    document.getElementById('taskDisplay').appendChild(taskDiv); 
}