const { FALSE } = require("sass");

$(document).ready(function () {
    console.log('jQuery ready');
    // click listeners:
    setupClickListeners();
    // get current tasks from server:
    getTasks();
}); // end doc ready

//Click listeners 
function setupClickListeners() {
    $('#addButton').on('click', function () {
        console.log('you clicked the add button');

        let taskObject = {
          task: $('#taskInput').val(),
          due: $('#inputDate').val(),
          priority: $('#priority').val(), 
          state: false,
        }  
        
        postNewTask(taskObject);
        $('.input').val('');
    });

}

function postNewTask(task){
console.log('posting new task:', task)

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: task, 
      }).then(function(response){
        console.log('Response from sever', response);
        getTasks();
      }).catch(function(err){
        console.log('Error in POST', err);
      });
}


function getTasks() {
    console.log('getting tasks: ajax');
    // ajax call to server to get tasks
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log(response);
        render(response);
    }).catch(function (err) {
        console.log('error in GET', err);
    });
}

function render(tasks) {
    for (const task of tasks) {
        if(task.state === false){
            console.log('false means incomplete');
           
           let row = $( `
            <tr scope="row">
            <td><input type="checkbox" class="completeChk"></td>
            <td>${task.task}</td>
            <td>${formattedDueDate}</td>
            <td>${task.category}</td>
            <td><button class="btn btn-sm btn-danger-outline deleteBtn">Delete Task</button></td>
            </tr>
            `);

            row.data(task);

            $("#currentTasks").append(row);

        } else if (task.state === true){
            console.log('true means complete');
            let row = $(`
            <tr scope="row">
            <td><input type="checkbox" checked disabled></td>
            <td>${task.task}</td>
            <td>${formattedDueDate}</td>
            <td>${task.complete}</td>
            <td><button class="btn btn-sm btn-secondary-outline copyTask">Copy Task</button></td>
            </tr>
            `)

            row.data(task);

            $("#completedTasks").append(row);
        }
    }
}