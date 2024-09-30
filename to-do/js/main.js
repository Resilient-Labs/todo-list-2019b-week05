let msgList = []
document.querySelector('button').addEventListener('click', ()=>{
    let msg = document.querySelector('input').value
    document.querySelector('ul').innerHTML += `
        <li>
            ${msg}
            <button  id= "del1">-</button>
        </li>
        
    `
    document.querySelector('input').value =""
    document.querySelectorAll('#del1').forEach(x=>x.addEventListener('click', (e)=>{
        e.target.parentElement.classList.add('completed')
    }))
})


document.querySelector('#del').addEventListener('click', ()=>{
    document.querySelector('ul').innerHTML = ""
})
document.querySelector('#delCompleted').addEventListener('click', ()=>{
    document.querySelector('#delCompleted').addEventListener('click', () => {
        let completedItems = document.querySelectorAll('.completed');
        completedItems.forEach(item => {
            item.remove();
        });
    });
})
