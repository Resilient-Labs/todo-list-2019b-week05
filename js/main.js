
//when the button is clicked, value would be logged 
document.querySelector('#submit-btn').addEventListener('click', addATodoItem)



function addATodoItem (){

    //contains value of input
    let formInput = document.querySelector('#myInput').value;
   //selects the unordered list
    const list = document.querySelector("#myUL");
    //puts in the value of input in a new li in the selected unordered list
    list.innerHTML += `<li class="listItem">${formInput}</li>`;
    
}

// document.querySelector('#myUL').addEventListener('click', removeATodoItem)
document.querySelector('#myUL').addEventListener('click', makeItemsComplete);
//makes li that appeared into a class when toggled
function makeItemsComplete (event) {
    //makes new li get a new class upon toggle
    let completedClass = event.target.classList.toggle('completed')

    // document.querySelector('.completed').style.color = 'grey';
    console.log(completedClass)
}
// document.querySelector('#myUL').addEventListener('click', makeItemsComplete);

// function makeItemsInComplete (event) {
//     //makes new li get a new class upon toggle
//     document.querySelector('.completed').style.color = 'grey'

// }

// needs to be looped 
document.querySelector('#clearCompleted-btn').addEventListener('click', clearCompleted)

function clearCompleted () {
    // let completedOnes = document.querySelector('#myUL').children[0]
//    console.log(completedOnes)
   let parentComplete = document.querySelector('#myUL')
   let liToCompletedOnes = document.querySelectorAll('.listItem')
//    console.log(liToCompletedOnes,'word')
//    console.log(,'word')
liToCompletedOnes.forEach((element) => {
    if (element.classList.contains('completed')) {
        parentComplete.removeChild(element);
    }
})
}

//click clear all button

document.querySelector('#clearAll-btn').addEventListener('click', clearAllTasks)

//remove them from the ul

function clearAllTasks() {
//take all of the li created elements with class name 'list-item'
    document.querySelector('#myUL').innerHTML = '';

}
    // 


    //   console.log(parentComplete.children.className, 'ayy')



//    for (i = 0; i < parentComplete.children.length; i++) {
//     if (parentComplete.children.className === 'completed') {
//         parentComplete.removeChild(liToCompletedOnes);
//     }
//    }
    // let i = 0 
    // while (parentComplete.children.className === 'completed') {
    //     parentComplete.removeChild(liToCompletedOnes)
    //     i++;
    // }
    
    

//create a function that checks if there are li that have class of "completed"
function checkCompleted () {
    
}






// document.querySelector('li').addEventListener('click', removeToDoItem)

// function removeToDoItem (){
//     //contains value of input
    
// }