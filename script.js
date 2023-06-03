const inputTask = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

function addTask() {
    if (inputTask.value === '')  {
        alert('Please Enter a Task')   
    }
    else{
        let li =  document.createElement('li')
        li.innerHTML = inputTask.value;
        taskList.appendChild(li)
        let Span = document.createElement("span")
        Span.innerHTML ="\u00d7" ;
        li.appendChild(Span)
    }
    saveData();


    inputTask.value = " ";
}

taskList.addEventListener("click", function (task) {
    if (task.target.tagName === "LI") {
        task.target.classList.toggle("checked")
        saveData();
        
    }
     else if (task.target.tagName === "SPAN") {
        task.target.parentElement.remove();
        saveData();
    }
    
}, false)
function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
    
}
function getData() {
    
    taskList.innerHTML = localStorage.getItem("data");
}
getData();