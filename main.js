// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create new list item for the task
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <div class="action-btns">
            <button class="complete-btn" onclick="completeTask(this)">Complete</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    // Add new task to the list
    taskList.appendChild(li);

    // Clear input after adding
    taskInput.value = '';
}

// Function to mark task as complete
function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}