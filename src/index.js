//imports 
import {loadForm } from './load-form.js'

import { addTask } from './add-task.js'

import { createTask } from './create-task.js'
//this page will be for my buttons to lead to functions located on different modules 


//NEXT: make "remove" and "completed" buttons work
//NEXT: add project option on pop up form and store each task within specified project 
//NEXT: make "All projects" and "All tasks" buttons work
//NEXT: use "localStorage" to save user's prkect between sessions


export function Task(title, description, dueDate, priorityLevel) {
  this.title = title.value
  this.description = description.value
  this.dueDate = dueDate.value
  this.priorityLevel = priorityLevel
};

export let myTasks = []


const newTask = document.getElementById("newTask");
newTask.addEventListener ('click', () => {
    loadForm();
});

const submit = document.getElementById("submitButton");
submit.addEventListener ('click', () => {
    addTask()
})

export let priorityLevel = ""

export function priorityCheck() { 
    if(document.getElementById("low").checked) {
        priorityLevel = "Priority: Low"
    } 
    else if (document.getElementById("medium").checked) { 
        priorityLevel = "Priority: Medium"
    } 
    else if (document.getElementById("high").checked) { 
        priorityLevel = "Priority: High"
    } else { 
        priorityLevel = "No Priority Selected"
    }
}


export function display() { 
    const displayArea = document.getElementById('taskDisplay'); 
    const singleTask = document.querySelectorAll('.tasks') 
    singleTask.forEach(tasks => displayArea.removeChild(tasks)); 

    for (let i=0; i < myTasks.length; i++) { 
        createTask(myTasks[i]);
    }
}

