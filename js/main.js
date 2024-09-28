/* I am building a simple toDo list. 

I want the client to be able to input their toDo items.

each time the client clicks 'add to list', I want there to be a click event that displays their toDo to the ul.

I want the client to be able to click on their toDo items in the UL and it activate a click event that crosses the item off the list (strikes a line through the item)

Every time an item is added to the to Do list, I want a message to be displayed in the p with the id of toDosRemaining. That message should say `You have ${numberOfToDo} To Do's Remaining`

When There are no To Do items on the list, or if every item is crossed off, the list should say "Yay! You Have Nothing To Do!"

When the patient clicks the button labeled clear, the ul list should be cleared of any to do items.  */

const inputField = document.getElementById('addtoDo');
const addButton = document.getElementById('addToList');
const displayList = document.getElementById('displayToDos');
const remainingToDosMessage = document.getElementById('toDosRemaining');
const clearButton = document.getElementById('clear');

let toDo = [];

function updateremainingToDos(){
    const remainingToDoCount = toDo.filter((item, index) => {
        const listItem = todoList.children[index];
        return !listItem.classList.contains('completed');
    }).length;
    if (remainingToDoCount === 0) {
        remainingToDosMessage.textContent = "Yay! You have nothing to do!";
    } else {
        remainingToDosMessage.textContent = `You have ${remainingToDoCount} remaining to do!`;
    }
} 
    

function addtoDo(){
    const toDoText= inputField.value.trim()
    if (toDoText===""){
    return;
    }
    toDo.push(toDoText);
    inputField.value="";
    displayToDos();
    updateremainingToDos();
}

function displayToDos(){
    displayList.innerHTML="";
    toDo.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      li.classList.toggle('completed'); 
    });
    displayList.appendChild(li);
});
}

function clearList(){
    toDo = [];
    displayList.innerHTML="";
    updateremainingToDos();
}

addButton.addEventListener('click',addtoDo)
clearButton.addEventListener('click',clearList)

updateremainingToDos();


