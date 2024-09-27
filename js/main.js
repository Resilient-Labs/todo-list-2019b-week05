document.querySelector('#addToList').addEventListener('click', addItem);

const itemInput = document.querySelector('#listInput');
const list = document.querySelector('ol');

let counterTask = document.querySelector('#counter');

function addItem() {
    const li = document.createElement('li');
    li.addEventListener('click', taskDone); //Allows marking the item as done
    li.innerText = itemInput.value;
    list.appendChild(li);
    itemInput.value = '';
    counterTask.innerText++; //Augment items left
}
// I had to read documentation about the .appendChild() method and .createElement()

// https://dev.to/iamcymentho/implementing-to-do-list-using-javascript-32a7 I used this to guide this step
function taskDone(click) {
    const task = click.target;
    task.classList.toggle('isDone');

    //Augments or decreases total ites left
    let counter = 0
    let liElements = document.querySelectorAll('li');
    for (let i = 0; i < liElements.length; i++) {
        if (liElements[i].classList.contains('isDone')) {
            counter++;
        }
    }
    counterTask.innerText = liElements.length - counter;
}

// https://stackoverflow.com/questions/10750137/remove-all-li-from-ul I used this to guide this step
document.querySelector('#clearList').addEventListener('click', clearList);

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }

    counterTask.innerText = 0; //Returns counter to 0
}


// https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll I used this to guide this step
document.querySelector('#clearCompleted').addEventListener('click', clearCompleted);

function clearCompleted() {
    let liElements = document.querySelectorAll('li');
    for (let i = 0; i < liElements.length; i++) {
        if (liElements[i].classList.contains('isDone')) {
            liElements[i].remove();
        }
    }
}