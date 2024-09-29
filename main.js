
// declare some const var
const userTypeHere = document.getElementById('userTypeHere');
const listContainer = document.getElementById('listcontainer');


// delcare a function that adds a li element after pressing +
// add an alert in case nothing gets typed
// make input element empty after to do has been added
function addToDo(){
    let li = document.createElement('li');
    li.innerHTML = userTypeHere.value;
    listContainer.appendChild(li);
    
    
    if (userTypeHere.value === ''){
        alert('Please type a To Do')
    } 
    userTypeHere.value = '';
    
}
/* 
- declare li variable and use createlement so a li element can be added without having to add it to the html since users don't have access to that ofc
- use innerhtml to replace the existing contents of li with the value typed in the input
- use appendchild to add a li (append = add | child -> add child to ul)
- to clear the input after a to do has been added make sure to set the value of the input to an empty string! 
- the empty string has to be after the alert, otherwise you will get an alert every time you add a to do since the input will be empty right away.
 */
listContainer.addEventListener('click', function (clickChecked)
{
    if (clickChecked.target.tagName === 'LI'){
        clickChecked.target.classList.toggle('checkedoff');
        
    }
})
/* */
function clearAll(){
    listContainer.innerHTML = '' 
}
// hihello

