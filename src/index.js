//imports 
import {loadForm } from './load-form.js'


//this page will be for my buttons to lead to functions located on different modules 

//import loadForm()


// to dos will be objects
//create using factories or constructor or classes 

//function Task() {
  //  this.title = title
    //this.description = description
    //this.dueDate = dueDate
   // this.priorityLevel = priorityLevel
// };

// const task = new Task


// interface needs 'view all projects, view all todos(tasks) with just title and due date, view projects, expand a
//task to see description, delete task.  

//submit button > createTask(); 

//newTask button is clicked, leads to "loadForm" function to fill in info. 

const newTask = document.getElementById("newTask");
newTask.addEventListener ('click', () => {
    loadForm();
});

