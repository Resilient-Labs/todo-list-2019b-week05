//Code from https://www.w3schools.com/howto/howto_js_todolist.asp 
//https://stackoverflow.com/questions/71603327/how-to-strikethrough-a-list-element-using-javascript



//add event listener
document.querySelector('#addItem').addEventListener('click', newItem)
const list = document.querySelector('#myList')
//Create a function to show when a task is complete
function newItem(){//code to add a new item to the list whe you click add
let formInput = document.querySelector('#myInput').value//form input is the value from input with id of myInput
//create a variable for the list items-with innerhtml += li
list.innerHTML += `<li>${formInput}</li>`;//because it is inner.html we can use the actual element to place the input from user
}

list.addEventListener('click', strikeItem)
function strikeItem(event){
event.target.innerHTML=event.target.textContent.strike()
}



document.querySelector('#clear').addEventListener('click',clearItems)
function clearItems(){
document.querySelectorAll('li:has(strike)').forEach((item)=> {//li :has() is to say does this element have this requirement
    item.remove()//forEach just a loop to go through each item one by one and run the code (item.remove()) on the item!
})
}



///how can i make it remove the letter after it is added to the list>>>
// $('#myForm')[0].reset();





// document.getElementById("myform")

//RIP
//list.innerHTML=list.textContent.strike()



// const todoList = document.getElementById('todo-list');
// todoList.addEventListener('click', ('#checkItem') => {
//   const target = checkItem.target

//   if (target.tagName === 'LI') {
//     target.classList.toggle('completed');
//   }
// });



//determine what I would need to assign in html to hold the completed id??
//determine if you need to have an event listener for each list item in order to remove and how you would add it