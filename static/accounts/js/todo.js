//localStorage.setItem("tasks",`[{ "id": 1602964349653, "task": "hello", "date": "" }, { "id": 1602964349838, "task": "good", "date": "" }]`)


var uid = document.getElementById('userID').value ;

if(localStorage.getItem("uid")){
    uid = localStorage.getItem("uid")
}
var tasks = []

function addTask(task, date, id = Date.now()) {

        tasks.push({
            id,
            task,
            date
        })
        displayTask(id, task, date)
        localStorage.setItem(uid,JSON.stringify(tasks))
    
    
    
}

function displayTask(id, task, date) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    // var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(1);
    var cell4 = row.insertCell(2);
    // cell1.innerHTML = id;
    cell2.innerHTML = task;
    cell3.innerHTML = date;
    cell4.innerHTML = `<button type="button" onClick="deleteTask('` + id + `',this)" class="btn btn-outline-danger">Delete</button>`;
}

function deleteTask(id, r) { 
    tasks = tasks.filter(task => task.id != id)
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
    localStorage.setItem(uid,JSON.stringify(tasks))
}

function TodoSubmit() {
    var task = document.getElementById("task").value
    var date = document.getElementById("date").value
    // addTask(task, date)
    if(task != "" && date != ""){
        addTask(task, date)
    }
}

if(localStorage.getItem(uid)){
    tasks = JSON.parse(localStorage.getItem(uid))
    tasks.forEach(task => {
        displayTask(task.id,task.task,task.date)
    });
}