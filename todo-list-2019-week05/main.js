//Add item to do do list
function addTask(){
    const addTask=document.getElementById('addTask')
    const addText=addTask.value.trim()
    if(addText===''){
        alert('Please add a task to the To-Do list')
       
    }else{
  //create list under ul  
  const li=document.createElement('li')  
  li.textContent=addText
  //checkbox to mark as complete
  const checkbox=document.createElement('input')
  checkbox.type='checkbox' 
  //space to add list items
  const span=document.createElement('span')
  span.textContext='addText'
  //Keep li, span, and checkbox in same area
  li.appendChild(checkbox)
  li.appendChild(span)
 //keep li in list section
  const list=document.getElementById('list')
  list.appendChild(li)
 //clear input after adding each new task
  addTask.value=''
    }
}

//function to clear evrything on list
function clearList(){
    const list=document.getElementById('list')
    list.innerHTML=''
}

//function to clear evrything thats been checked
function clearCompleted(){
    const list=document.getElementById('list')
    const task=list.getElementsByTagName('li')

    for(let i=task.length-1; i>=0; i--){
        const checkbox=task[i].getElementsByTagName('input')[0]
        if(checkbox.checked){
            list.removeChild(task[i])
        }
    }
}