# GOAL: create an app to manage To Do list items: 

[x] Tasks should be created, updated and stored in a SQL database:
    [x] get route to get list
    [x] post route for posting new 

[x] Whenever a task is created on the front end, the entire task list should refresh to show completed tasks
    [x] make sure to get after each post/put request

[x] Each task should have complete and delete options:

[x] When a task is complete, there should be some kind of style change to show it has been completed. 

[x] Database should know what tasks are complete or not

[x] Deleting a task should delete it from the DOM and Database

## Server Structure:   
[x] Make a database called: weekend-to-do-app. 
[x] Make a table for tasks to include: 
    - Task Details:
        - VARCHAR (500)?
    - Task Status:
        - BOOLEAN 
    - Date Due:
        - DATE 
    ❔ Date Complete
        - DATE, but auto updates when status changes?
[ ] Add server creation code to _database.sql_ file in project.


## Project Structure:   

### Basics:
[x] server folder: 
    [x] public folder
        - index.html
        [~] scripts
            - client.js
            - jquery
        [x] styles
            - bootstrap
            - bootstrap map
            - styles.css
    [x] modules
    [x] router
- server.js
- database.sql             

### Server Functionality: 
[x] npm init --yes
[x] npm install *packages*:
    - express
    - pg
    - body-parser
[x] set up router for /tasks
    - router should handle:
        [x] router.get
        [x] router.post
        [x] router.delete
        [x] router.put 
[x] set up module folder to manage pool

### Client Functionality: 
[x] show all current tasks and their status:

[x] add a new task: 
    [x] inputs for: 
        - task name
        - due by
        - category?
    [x] refresh task list
[X] mark a task as complete
[x] delete a task