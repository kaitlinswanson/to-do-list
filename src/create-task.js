import { myTasks } from './index.js'

//add a remove button to this page so it is created inside of the displayed task

export function createTask(item) {
    const taskDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const dueDateDiv = document.createElement('div');
    const priorityLevelDiv = document.createElement('div');

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

    priorityLevelDiv.textContent = item.priorityLevel;
    priorityLevelDiv.classList.add('priorityLevel');
    taskDiv.appendChild(priorityLevelDiv);

    document.getElementById('taskDisplay').appendChild(taskDiv); 
}