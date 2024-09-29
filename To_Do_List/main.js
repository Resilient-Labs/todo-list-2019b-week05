
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton'); 
    const taskInput = document.getElementById('taskInput'); 
    const taskList = document.getElementById('taskList'); 

    
    addButton.onclick = function() {
        const taskText = taskInput.value.trim(); 

        if (taskText === "") {
            alert("Please enter a task"); 
            return;
        }

        
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item'); 
        taskItem.innerHTML = `${taskText} <button class="deleteButton">Delete</button>`;

        
        taskList.appendChild(taskItem);

        
        taskInput.value = "";

        
        taskItem.querySelector('.deleteButton').onclick = function() {
            taskList.removeChild(taskItem);
        };
    };
});
