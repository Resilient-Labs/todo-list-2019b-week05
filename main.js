
// Function to add a new task

function addTask() {
    const taskInput = document.getElementById('newtask');
    const taskText = taskInput.value;
    console.log(`Task Input: ${taskText}`);



// Check if the input is not empty
    if (taskText.trim() !== "") {
        const taskList = document.getElementById('tasklist');


// Create a new list item (task)
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span onclick="toggleComplete(this)">${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>`;


// Add the new task to the list

        taskList.appendChild(listItem);
        console.log(`New number of tasks: ${taskList.children.length}`);



        // Clear the input field
        taskInput.value = "";

    }

}

// Function to mark a task as complete/incomplete

function toggleComplete(taskElement) {
    const listItem = taskElement.parentElement;
    listItem.classList.toggle('completed');


    if (listItem.classList.contains('completed')) {
        console.log(`Task completed: ${taskElement.innerText}`); // Log the completed task
    } else {
        console.log(`Task unmarked: ${taskElement.innerText}`); // Log the unmarked task
    }
}


// Function to remove a task

function removeTask(removeButton) {
    const listItem = removeButton.parentElement;
    const taskText = listItem.querySelector('span').innerText;


    listItem.remove(); // Remove the task from the DOM
    console.log(`Task removed: ${taskText}`); // Log the removed task
}
