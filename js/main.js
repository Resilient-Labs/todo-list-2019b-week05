/*
insert your item
add stuff to list
display each item as they are inserted
*/


let addtoDoButton = document.querySelector('#addToDo')
let toDoContainer = document.querySelector('#toDoContainer')
let inputField = document.querySelector('#inputField')
let clearList = document.querySelector('.clearList')
let clearItem = document.querySelector('.clearItem')

addtoDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function lineThrough(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })
    clearList.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph)
    })

})

