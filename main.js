
document.querySelector('#addItem').addEventListener('click', listAddItem)
document.querySelector('.clear').addEventListener('click', clearAlltasks)

let tasks = document.querySelector('.tasks')
tasks.addEventListener('click', doneWithTask)

function listAddItem(){
    let userInputText = document.getElementById('listItems').value //userInputtext new variable name
    checkInput(userInputText)
    if(userInputText !== ''){
        console.log(userInputText)

        tasks.innerHTML += `<li> ${userInputText}</li>`;
    }
}
function doneWithTask(event){
    console.log(event.target, 'check')
    console.log(event.target.tagName)
    
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('lineThrough')

    }

}

// function check if contents in input and alert if not
function checkInput(items){
    // let items = document.getElementById('listItems').value
    if(items === ''){
        alert('error, please type again!')
    }
    console.log('items:',items)
}


function clearAlltasks(){
    tasks.innerHTML = ''
}


