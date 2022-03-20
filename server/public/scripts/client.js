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

    $('#allTasks').on('click', '.deleteBtn', deleteTask);
    $('#allTasks').on('click', '.copyTask', copyTask);

    $('#currentTasks').on('click', '.completeChk', completeTask);

    $('#cyberpunk').on('click', cyberPunk);
    $('#default').on('click', defaultClass);

}

function copyTask() {
    let task = $(this).closest("tr").data();

    formattedDueDate = moment(task.due).format('YYYY-MM-DD')

    $('#taskInput').val(task.task);
    $('#inputDate').val(formattedDueDate);

}

function cyberPunk() {
    console.log('you clicked the cyberpunk button');
    $('#banner').empty();
    $('#banner').append('<div><img src="./styles/images/31D48D56-A4C9-46C3-9393-28483D3CF67B.jpeg" style="width: 750px; height: 350px; align-items: center;"></img></div>');
    $('#pageTitle').empty();
    $('body').addClass('bg-dark bg-gradient');
    $('.btn').removeClass('btn-secondary');
    $('.btn').addClass('btn-warning');
    $('main').removeClass('default');
    $('main').addClass('cyberpunk');
}

function defaultClass() {
    $('#banner').children("div").remove();
    $('#pageTitle').text("To - Do List")
    $('body').addClass('m-2 p-1 bg-light');
    $('body').removeClass('bg-dark bg-gradient');
    $('.btn').addClass('btn-secondary');
    $('.btn').removeClass('btn-warning');
    $('main').addClass('default');
    $('main').removeClass('cyberpunk');
}


function deleteTask() {
    let task = $(this).closest("tr").data();
    let id = task.id;

    console.log('deleting:', task, id);

    $.ajax({
        type: 'DELETE',
        url: `/tasks/${id}`
    }).then(function (response) {
        console.log('Response from server', response);
        getTasks();
    }).catch(function (err) {
        console.log('Error in POST', err);
    })
}

function completeTask() {
    let task = $(this).closest("tr").data();
    let id = task.id;

    console.log('completing:', task, id);

    //ajax PUT request to send ID and transfer status:

    $.ajax({
        url: `/tasks/${id}`,
        method: 'PUT',
        data: {
            state: task.state
        }
    }).then(function (response) {
        console.log('Updated');
        getTasks();
    }).catch(function (err) {
        console.log('EVERYTHING BROKE WHEN COMING BACK FROM UPDATE: ', err);
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

function postNewTask(task) {
    console.log('posting new task:', task)

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: task,
    }).then(function (response) {
        console.log('Response from server', response);
        getTasks();
    }).catch(function (err) {
        console.log('Error in POST', err);
    });
}

function render(tasks) {
    $('#currentTasks').empty();
    $('#completedTasks').empty();
    for (const task of tasks) {

        let formattedDueDate = moment(task.due).format('MMMM DD YYYY');
        let formattedComplete = moment(task.completed).format('MMMM DD YYYY')

        if (task.state === false) {
            // console.log('false means incomplete');

            let row = $(`
            <tr scope="row">
            <td><input type="checkbox" class="completeChk"></td>
            <td>${task.task}</td>
            <td>${formattedDueDate}</td>
            <td><button class="btn btn-sm btn-danger-outline deleteBtn">Delete Task</button></td>
            <td><button class="btn btn-sm btn-secondary-outline copyTask">Copy as New Task</button></td>
            </tr>
            `);

            row.data(task);

            $("#currentTasks").append(row);

        } else if (task.state === true) {
            // console.log('true means complete');
            let row = $(`
            <tr scope="row">
            <td><input type="checkbox" checked disabled></td>
            <td>${task.task}</td>
            <td>${formattedDueDate}</td>
            <td>${formattedComplete}</td>
            <td><button class="btn btn-sm btn-danger-outline deleteBtn">Delete Task</button></td>
            <td><button class="btn btn-sm btn-secondary-outline copyTask">Copy as New Task</button></td>
            </tr>
            `)

            row.data(task);

            $("#completedTasks").append(row);
        }
    }
}