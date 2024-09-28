//User types task in field 
//User hits add button
//Task is added to list 
//User can check task off list 


document.querySelector('button').addEventListener('click', addTask)


let ul =  document.querySelector('ul')

function addTask(){
     //Grabs the value from the text field
     const task = document.querySelector('#userTask').value 
     console.log(task)

     //Variable for creating li
     let li = document.createElement("li")
     
     //Variable for making task into something that will be added to list item 
     let textnode = document.createTextNode(task)
     
     
     
     //creates a new input which will be in list item
     const newInput = document.createElement("INPUT")

     //Sets features of the new input 
     newInput.setAttribute("type", "checkbox")
     newInput.setAttribute("value", "ON")

     //adds li to ul
     ul.appendChild(li)
     
     //adds checkbox and task to list items 
     li.appendChild(newInput)
     li.appendChild(textnode)

     document.querySelector('#userTask').value = ''; // Clear the input field
     
     //What to do if text field is empty
     if (task === "") {
          alert('Please enter task before hitting the "add" button.');
          return;
     }


}

ul.addEventListener('click', taskCompleted);

function taskCompleted(event){
     const taskComplete = event.target;
     if (taskComplete.type === 'checkbox') {
          if (taskComplete.checked) {

               const lastListItem = ul.children[ul.children.length - 1];

               ul.insertBefore(taskComplete.parentNode, lastListItem.nextSibling);

          }

     }
     }
