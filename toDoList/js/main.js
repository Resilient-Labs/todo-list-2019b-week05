// todo display array by grabbing the html element and setting it to the array
// make event listner for inout button
//display 


let todoList = [];


document.getElementById("addtolist").addEventListener("click", addTodo);
document.getElementById("clearlist").addEventListener("click", clearList)
document.getElementById("backToDom")


function addTodo(){                                                    //this all comments for first time addig to list
    var todo = document.getElementById('todoinput').value;        // bread
    todoList.push(todo);                                           //array with bread inside [bread]
    // console.log(todoList)
    // document.getElementById("backToDom")
let backToDom =  document.getElementById("backToDom")             // assign backtoDom to an empty ul
// console.log(backToDom)
backToDom.innerHTML = ""                                          //assign backToDom to empty string and we needed it to be emtpty becuase the back to dom will be the same as the first value "bread"
for (let i=0; i < todoList.length; i++){                               // looped the array to back ul that has the string of "bread"
    backToDom.innerHTML =  backToDom.innerHTML + `<li>${todoList[i]}</li>`    //this displays the list item bread
}                                                                               //all these steps will be completed again when another todo is added lines 15 to 23
}

function clearList(){
    todoList.length = 0
    backToDom.innerHTML = ""

}


// list.innerHTML += `Item ${list.children.length + 1}`;

