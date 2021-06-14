//imports 
import {loadForm } from './load-form.js'

import { addTask } from './add-task.js'

//need to make function createTask module and import

//this page will be for my buttons to lead to functions located on different modules 
// to dos will be objects
//create using factories or constructor or classes 

export function Task(title, description, dueDate, priorityLevel) {
  this.title = title
  this.description = description
  this.dueDate = dueDate
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

function display() { 
    const displayArea = document.getElementById('taskDisplay'); 
    const singleTask = document.querySelectorAll('.tasks') 
    // NEXT need to create class of "tasks" for each added task appended to display area
    
    for (let i=0; i < myTasks.length; i++) { 
        createTask()
    }
}