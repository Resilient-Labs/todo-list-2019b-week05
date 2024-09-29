// Goal: Build a Simple Todo List

const taskInput = document.getElementById('task_input') // Task input
const addButton = document.getElementById('add_button') // Add button
const taskList = document.getElementById('task_list') // Task list

document.getElementById('add_button').addEventListener('click', addTask)
// document.getElementById('delete_button').addEventListener('click', deleteTask)
//taskList.addEventListener('click', modifyTask) // Listens for clicks from the list

function addTask() {
    const todoInput = taskInput.value.trim(); // Storing user input into a variable to use it in the function below. trim() takes off the extra space

    if (todoInput) {
        const li = document.createElement('li'); // Creates an li element

        li.innerHTML = `
            <span>${todoInput}</span>
            <button class="edit_button">Edit</button>
            <button class="delete_button">Delete</button>
        `; // Creates an li element that wasn't there before and adds the li element in the unordered list

        taskList.appendChild(li); // Adding the li element into the list
        taskInput.value=""; // Makes sure the task input is empty
    }

}

// Handles 2 clicks on the task list- delete and edit
taskList.addEventListener('click', function(e) {
    if (e.target.className === 'delete_button') { // e.target focuses on the HTML element that triggered the event
        const listItem = e.target.parentElement; // Get ul
        taskList.removeChild(listItem); // Remove the list item from ul
    }

    if (e.target.className === 'edit_button') {
        const span = e.target.previousElementSibling; // Get the <span> with the text, using previousElementSibling because the HTML order is span > edit > delete
        const newText = prompt('Edit your task:', span.textContent);
        if (newText !== null) { // checks if the user clicked 'Cancel' in the pop-up
            span.textContent = newText
        }
    }
});


























/* INITIAL THOUGHT PROCESS

// The user clicks on the add task button
document.querySelector('.create_task').addEventListener('click', add)

// User enters information into task

// Button adds the task and is added to the list
function add() {

    // Add a blank template task to populate the new user input

    // Source: https://www.w3schools.com/jsref/met_node_clonenode.asp#:~:text=The%20cloneNode()%20method%20creates,to%20clone%20descendants%20(children).

    const clickEvent = document.querySelector('.create_task').addEventListener('click', add)

    const blank_task = document.querySelector('.task_item')
    
    const duplicate = blank_task.cloneNode(true) // If  is true duplicate 

    if (clickEvent == true) {

    }

    document.querySelector("task_item").appendChild(duplicate);

    // Gather the user information
    let task_name = document.querySelector('#task_name').value
    let task_description = document.querySelector('#task_description').value

    // Add the user information to the task list
    document.querySelector('h2').innerText = task_name
    document.querySelector('p').innerText = task_description
} 

*/