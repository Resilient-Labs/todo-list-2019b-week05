let input = document.getElementsByTagName('input')[0];
let list = document.getElementsByTagName('ul')[0]


// add items 
function addItem(){
    let inputValue = input.value

    if (inputValue == ''){
        list.innerHTML += ``
    }else {
        list.innerHTML += `<li onclick="completed(event)" >${inputValue}</li>`
    }
}

// clears list
function clearList(){
    list.innerHTML = '';
}


// complete task

function completed(event){

        event.target.classList.toggle ('completed')
}


// clear completed 
// mentor helped. fin is an array like object so I have to iterate through it removing each one with .remove()

function clrCompleted(){
    let fin = document.getElementsByClassName('completed')
    
    while (fin.length > 0) {
        fin[0].remove(); 
    }
}