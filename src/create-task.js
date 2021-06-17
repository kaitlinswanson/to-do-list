import { myTasks } from './index.js'
import { display } from './index.js'


export function createTask(item) {
    const taskDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const dueDateDiv = document.createElement('div');
    const priorityLevelDiv = document.createElement('div');
    const projectDiv = document.createElement('div');

    const removeTaskButton  = document.createElement('button'); 
    const completeButton = document.createElement('button');

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

    projectDiv.textContent = item.project; 
    projectDiv.classList.add('project');
    taskDiv.appendChild(projectDiv);

    //buttons for each task
    removeTaskButton.textContent = "Remove"; 
    removeTaskButton.classList.add('removeTaskButton'); 
    taskDiv.appendChild(removeTaskButton);
    removeTaskButton.setAttribute('id', 'remove');

    completeButton.textContent = "Completed"; 
    completeButton.classList.add('completeButton'); 
    taskDiv.appendChild(completeButton); 
    completeButton.setAttribute('id', 'complete');

    //adds entire task to display div
    document.getElementById('taskDisplay').appendChild(taskDiv); 

    removeTaskButton.addEventListener('click', () => { 
        myTasks.splice(myTasks.indexOf(item), 1);
        display(); 
    });

    completeButton.addEventListener('click', () => {
        myTasks.splice(myTasks.indexOf(item), 1); 
        display();
    })
}
