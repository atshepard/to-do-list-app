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

function formatDate(date){
moment(date).format('MMMM d, YYYY');
}

function render(tasks) {
    for (const task of tasks) {
        let formattedDueDate = formatDate(task.due);

        if(task.state === true){
            console.log('true means complete');
            $("#completedTasks").append(`
            <tr scope="row">
            <td><input type="checkbox" checked disabled></td>
            <td>${task.task}</td>
            <td>${formattedDueDate}</td>
            <td>${task.complete}</td>
            <td><button class="btn btn-sm btn-secondary-outline copyTask">Copy Task</button></td>
            </tr>
            `)
        } else if (task.state === false){
            console.log('false means incomplete');
            $("#currentTasks").append(`
            <tr scope="row">
            <td><input type="checkbox" class="completeChk"></td>
            <td>${task.task}</td>
            <td>${formattedDueDate}</td>
            <td>${task.category}</td>
            <td><button class="btn btn-sm btn-danger-outline deleteBtn">Delete Task</button></td>
            </tr>
            `)
        }
    }
}