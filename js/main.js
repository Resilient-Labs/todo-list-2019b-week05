//form 
//input
//+ button to add a todo 
//when a todo is entered it should generate a checkbox and a p with the todo 
//if someone checks the to do it should get striked off 
//BONUS: when checked move the todo to the bottom of the list


const addBtn = document.querySelector("#addBtn");
console.log({ addBtn });

const storage = [{item:"free the people"}]; 

addBtn.addEventListener("click", addTodo); 

function addTodo(e) {
    //prevent the default behavior of forms
    e.preventDefault(); 
    //get the input from the user
    const todoInput = document.querySelector("#todoInput"); 
    const todo = todoInput.value; 
    // add the elem to the storage
    const currentTodo = {}; 
    currentTodo.item = todo; 
    currentTodo.checked = false; 
    storage.push(currentTodo);
    console.log(storage); 
    display(); 
    todoInput.value = "";
}

function display() {

    const todosList = document.querySelector(".todos");
    todosList.replaceChildren();

    for (let i = 0; i < storage.length; i++) {
        
        const listItem = document.createElement("li");
        const todoPara = document.createElement("p");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        todoPara.textContent = storage[i].item;

        listItem.addEventListener("click", () => addCheck(i));
        if (storage[i].checked) {
            todoPara.classList.add("checked");
        }
        else {
            todoPara.classList.remove("checked");
        }

        listItem.appendChild(checkBox);
        listItem.appendChild(todoPara);
        todosList.appendChild(listItem);
        
    }  
}

function addCheck(i) {
    storage[i].checked = !storage[i].checked; 
    display();
}

// create an array called storage to store your todolist items
// each item will be an object storing the name and checked status of the item 
// apply an event listener on each item so that when it is clicked you toggle the 'checked' class
 




