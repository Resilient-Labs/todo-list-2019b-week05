//MAKING A TO DO LIST WOOOOO

//add a spot where people can enter list items
//allow user to submit entered list items
//when item is submitted, display on screen in list format
//give user option to check off list items, edit them, or remove them
//possibly account for items that already exist after adding them

document.querySelector('#addToList').addEventListener('click', addListItem)
document.querySelector('#clearList').addEventListener('click', clearList)
document.querySelector('#clearSelected').addEventListener('click', removeSelectedListItems)


function addListItem() {
    removeErrorMessage()
    //store the user value in a variable
    let userAddedItem = document.querySelector('#task').value
    //store the HTML for the new list items
    const displayAddedItem = `<li><input type='checkbox'><span>${userAddedItem}</span></li>`
    if(userAddedItem) {
        //display new list item
        document.querySelector('ul').innerHTML += displayAddedItem
        document.querySelector('#task').value = ''
        //add event listeners to new checkboxes
        document.querySelectorAll('li').forEach(element => element.addEventListener('click', crossOutListItems))

    } else {
        //display error if no input
        runErrorMessage()
    }
}

//function to update already created list items

function crossOutListItems() {
    document.querySelectorAll('li').forEach(element => {
        if(element.querySelector('input').checked) {
            element.classList.add('crossOut') 
        } else {
            element.classList.remove('crossOut')  
        }
    })   
}

//function to remove list items

function removeSelectedListItems() {
    let allListItems = document.querySelectorAll('li')
    allListItems.forEach(element => {
        if(element.querySelector('input').checked) {
            document.querySelector('ul').removeChild(element)
        }
    })
}

//function to clear entire list

function clearList() {
    document.querySelector('ul').innerHTML = ''
}



//Display and remove error messages as needed

function removeErrorMessage() {
    document.querySelector('#errorMessage').innerText = ''
}

function runErrorMessage() {
    document.querySelector('#errorMessage').innerText = 'please enter an input.'
}