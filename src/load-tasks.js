import { myTasks } from './index.js'


export function loadTasks(item) { 
    const taskPageDisplay = document.getElementById('taskPageDisplay'); 
  
    let titleList = []; 
    myTasks.forEach(function(obj){
        titleList.push(obj.title)
    })
    
    taskPageDisplay.innerHTML= titleList; 

}