import { myTasks } from './index.js'

export function loadProjects() { 
    
        const projectPageDisplay = document.getElementById('projectPageDisplay'); 
      
        let projectList = []; 
        myTasks.forEach(function(obj){
            projectList.push(obj.project)
        })
        
        projectPageDisplay.innerHTML= projectList; 
    
} 