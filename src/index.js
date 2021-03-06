//imports 
import {loadForm } from './load-form.js'

import { addTask } from './add-task.js'

import { createTask } from './create-task.js'

import { loadTasks } from './load-tasks.js'

import { loadProjects } from './load-projects.js'
//this page will be for my buttons to lead to functions located on different modules 
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content')

tabs.forEach(tab => { 
    tab.addEventListener('click', () => { 
        const target = document.querySelector(tab.dataset.tabTarget); 
        tabContents.forEach(tabContent => { 
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => { 
            tab.classList.remove('active')
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
})

const taskTab = document.getElementById('allTaskTab'); 
taskTab.addEventListener('click', loadTasks)

const projectTab = document.getElementById('allProjectsTab'); 
projectTab.addEventListener('click', loadProjects);

//NEXT: use "localStorage" to save user's prkect between sessions


export function Task(title, description, dueDate, priorityLevel, project) {
  this.title = title.value
  this.description = description.value
  this.dueDate = dueDate.value
  this.priorityLevel = priorityLevel
  this.project = project.value
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

const allProjectsButton = document.getElementById('allProjects'); 
allProjectsButton.addEventListener('click', () => {
    loadProjects(); 
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
export function setData () {
    localStorage.setItem(`myTasks`, JSON.stringify(myTasks));
    }

