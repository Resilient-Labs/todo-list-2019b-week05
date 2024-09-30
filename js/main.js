/* making a dynamic list that allows us to populate new tasks
as well as edit, remove, and clear the task list.

1. user enters task and it shows up
    a. user inputs task
    b. assign input string <- do i need this step?
    c. create new task/line with input string
    d. make sure input is cleared
2. user can mark task as done
    a. probably a toggle or class assign of some sort that styles the task as completed
3. user can clear all tasks or only completed tasks
    a. clear all
        - just makes the larger tasks section empty
    b. clear completed tasks
        - removed elements with class of "completed"

extra things
1. edit task
2. subtasks
3. archive */


document.querySelector('#submit').addEventListener('click', addTask);
document.querySelector('#clear').addEventListener('click', clearAll);
document.querySelector('#clearCompleted').addEventListener('click', clearCompleted);
document.querySelector('#tasks').addEventListener('click', completeTask);
let complete
// document.querySelector('.completed').addEventListener('dblclick', clearCompleted);


    // Array.from(taskAll).forEach(element => element.addEventListener('click', completeTask))

function addTask() {
    let task = document.querySelector('#task').value;
    if (task==='') {
        alert('Please input a task');
    } else {
        document.querySelector('#tasks').insertAdjacentHTML('beforeend', `<li onclick="completeTask" class='taskItem'>${task}</li>`); //insertAdjacentHTML beforeend, afterend, beforebegin, afterbegin
        document.querySelector('#task').value = ''; //clears input//
    }
}


function completeTask(click) {
    click.target.classList.toggle('completed')
}

function clearAll() {
    document.querySelector('#tasks').innerHTML=' ';
}

function clearCompleted() {
    while (complete = document.querySelector('.completed')) {
        complete.remove(complete);
    }
}