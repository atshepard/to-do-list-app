# TO-DO LIST APP
My first full-stack web app: a to-do list/task tracker.

Stack used: 
- Javascript
    - JQuery
    - Node.js
        - moment.js
        - pool.js
- HTML5
- CSS
    - Bootstrap
    - Sass
    - Sweet Alerts
-PostgreSQL/Postico


## DESCRIPTION 
This project came with *plenty* of great practice for a first full-stack web app:

### BACK-END SET-UP   
- Database and server set-up went smoothly: I had no issues with communication between the two. I did however, learn a lesson in planning the database: I ended up creating an extra unused column for a feature I later chose not to add. 

- I took care on the POST and PUT routes to avoid SQL injection.

### FRONT-END SET-UP
- One of the assignment requirements was to distinguish between completed and current tasks: I did so by making twice as much work for myself by adding a separate completed tasks table (which also checks and disables the checkbox once completed). This was more intuitive for me, but next time I would keep them on the same list and simply gray out the row. 

- This was my first time using Sweet Alerts, which I implemented during the delete button. I was pleased with how easy it was to implement. 

- This was also my first time using Moment.js, which I used on the front and back end to condition dates for the DOM and for sending to the server. 

### GIT BRANCHING
- This was my first project diving in to git branching and merging. I had no conflicts but did fail to use the --no-ff method on one branch. 


### STYLING
- This is the area in which I spent the most time learning: I leveraged Bootstrap and Sass for styling, and spent a significant amount of time creating a separate theme to practice both. I can tell I have a lot I can further practice, especially the communication between the two. I'm not all together pleased with the outcome, but I am thrilled with how much I learned. 

### DEPLOYMENT
- This app has been deployed on heroku through the Node.js heroku package: https://hidden-castle-76999.herokuapp.com/
