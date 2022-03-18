const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const tasksRouter = require('./routes/tasks.router.js');

//static: 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//routes: 
app.use('/tasks', tasksRouter);

//listen: 
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});