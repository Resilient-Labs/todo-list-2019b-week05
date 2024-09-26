//form 
//input
//+ button to add a todo 
//when a todo is entered it should generate a checkbox and a p with the todo 
//if someone checks the to do it should get striked off 
//BONUS: when checked move the todo to the bottom of the list


const addBtn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clear");

addBtn.addEventListener("click", addTodo); 
clearBtn.addEventListener("click", clearTodos);

const todoArray = [{ item: "free the people", checked: false }]; 

function addTodo(e) {
    //prevent the default behavior of forms
    e.preventDefault(); 
    //get the input from the user
    const todoInput = document.querySelector("#todoInput"); 
    const todo = todoInput.value; 
    // add the elem to the storage
    if (todo != "") {
        const currentTodo = {item: todo, checked: false}; 
        todoArray.push(currentTodo);
        console.log(todoArray); 
        display(); 
        todoInput.value = "";
    }
}

function display() {

    const todosList = document.querySelector(".todos");
    todosList.replaceChildren();

    for (let i = 0; i < todoArray.length; i++) {
        
        const listItem = document.createElement("li");
        const todoPara = document.createElement("p");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        todoPara.textContent = todoArray[i].item;

        listItem.addEventListener("click", () => addCheck(i));
        // if (todoArray[i].checked) {
        //     todoPara.classList.add("checked");
        // }
        // else {
        //     todoPara.classList.remove("checked");
        // }
        todoPara.classList.toggle("checked", todoArray[i].checked);

        listItem.appendChild(checkBox);
        listItem.appendChild(todoPara);
        todosList.appendChild(listItem);
    }  
}

function addCheck(index) {
    todoArray[index].checked = !todoArray[index].checked; 
    display();
}

function clearTodos() {
    //clear the array
    todoArray.length = 0; 
    todoArray.push({ item: "free the people - you cant delete me 👹", checked: false });
    display();
}

// create an array called storage to store your todolist items
// each item will be an object storing the name and checked status of the item 
// apply an event listener on each item so that when it is clicked you toggle the 'checked' class
 
// BONUS
// - make sure that if the input is empty nothing happens: done! 
// - have a clear all button: done! 
// - use localStorage to store the current todolist items
// - have an option to edit one 
// - add an option to have checked items go to the bottom of the list



