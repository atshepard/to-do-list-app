# GOAL: create an app to manage To Do list items: 

[ ] Tasks should be created, updated and stored in a SQL database:
    [ ] get route to get list
    [ ] post route for posting new 

[ ] Whenever a task is created on the front end, the entire task list should refresh to show completed tasks
    [ ] make sure to get after each post/put request

[ ] Each task should have complete and delete options:

[ ] When a task is complete, there should be some kind of style change to show it has been completed. 

[ ] Database should know what tasks are complete or not

[ ] Deleting a task should delete it from the DOM and Database

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
[ ] set up router for /tasks
    - router should handle:
        [ ] router.get
        [ ] router.post
        [ ] router.delete
        ❔ router.put 
[ ] set up module folder to manage pool

### Client Functionality: 
[ ] show all current tasks and their status:

[ ] add a new task: 
    [ ] inputs for: 
        - task name
        - due by
        - category?
    [ ] refresh task list
[ ] mark a task as complete
[ ] delete a task