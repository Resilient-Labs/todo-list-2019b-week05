let newTaskName = document.querySelector("input")
let listUL = document.querySelector("ul")

document.querySelector(".add").addEventListener('click', addATask)
listUL.addEventListener("click", markCompleted)
document.querySelector(".cb-all").addEventListener('click', clearAll)
document.querySelector(".cb-completed").addEventListener('click', clearCompleted)


function addATask() {
    if (newTaskName.value !== "") {
        let newTaskItem = document.createElement("li");
        let icon = document.createElement("i");

        icon.classList.add("fa-regular", "fa-circle");
        newTaskItem.appendChild(icon);

        newTaskItem.appendChild(document.createTextNode(" " + newTaskName.value));

        listUL.appendChild(newTaskItem);

        newTaskName.value = "";
    }
}

function markCompleted(e) {
    if (e.target.tagName === "LI" || e.target.tagName === "I") {
        // identify the <li> element and its <i> child
        let listItem = e.target.tagName === "LI" ? e.target : e.target.parentElement;
        let icon = listItem.querySelector("i");

        // toggle completed class on <li>
        listItem.classList.toggle("completed");

        // toggle icon classes based on the completed state
        if (listItem.classList.contains("completed")) {
            icon.classList.remove("fa-regular", "fa-circle");
            icon.classList.add("fa-solid", "fa-circle-xmark");
        } else {
            icon.classList.remove("fa-solid", "fa-circle-xmark");
            icon.classList.add("fa-regular", "fa-circle");
        }
    }
}

function clearAll() {
    let liList = document.querySelectorAll("li")

    for(let i=0; i<liList.length;i++){
        liList[i].remove()
    }
}

function clearCompleted() {
    let completed = document.querySelectorAll(".completed")

    for(let i=0; i<completed.length;i++){
        completed[i].remove()
    }
}
