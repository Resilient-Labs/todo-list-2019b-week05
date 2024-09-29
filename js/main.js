document.querySelector("#addTodo").addEventListener("click", addTodo);
document
  .querySelector("#clearCompleted")
  .addEventListener("click", clearCompletedTodos);
document.querySelector("#clearAll").addEventListener("click", clearAllTodos);

const todoInput = document.querySelector("input");
const todoList = document.querySelector("#todoList");

function addTodo(e) {
  e.preventDefault();

  // Get value from the input
  const todoValue = todoInput.value;

  // Create child element of todoList
  const todoItem = document.createElement("p");
  todoItem.classList.add("todo-item");
  todoItem.innerText = todoValue;

  //Append child to parent
  todoList.appendChild(todoItem);

  // Clear input when button is clicked
  todoInput.value = "";

  //When todoItem is clicked mark as completed
  todoItem.addEventListener("click", (e) => {
    const clickedItem = e.target;
    clickedItem.classList.toggle("completed");
  });

  // Create completed button
  //   const completeBtn = document.createElement("button");
  //   completeBtn.innerHTML = "Complete";
  //   completeBtn.classList.add("complete-btn");
  //   todoList.appendChild(completeBtn);
}

function clearCompletedTodos() {
  const completedTodos = document.querySelectorAll(".completed");

  completedTodos.forEach((todo) => {
    todo.remove();
  });
}

function clearAllTodos() {
  todoList.innerHTML = "";
}
