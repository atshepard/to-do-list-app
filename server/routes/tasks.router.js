const express = require('express');
const tasksRouter = express.Router();
const pool = require('../modules/pool');
const moment = require('moment');


// GET
tasksRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks" ORDER BY "category" ASC;';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log('error getting tasks', err)
        res.sendStatus(500);
    })
})

// POST
tasksRouter.post('/', (req, res) => {
    let newTask = req.body;

    let formattedDueDate = moment(newTask.due).format('MM DD YYYY');

    let queryText = `
        INSERT INTO "tasks"
        ("task", "due", "state") 
        VALUES ($1, $2, $3);
        `
    let values = [newTask.task, formattedDueDate, newTask.state]
    // pool.query(values)
    console.log('Adding new task', values);

    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(`Error in adding task`, err);
            res.sendStatus(500);
        });
});


tasksRouter.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    let queryText = `
        DELETE FROM "tasks"
        WHERE "id" = $1;`;

    pool.query(queryText, [id])
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log('POOL BROKE:', err);
            res.sendStatus(500);
        })

})

tasksRouter.put('/:id', (req, res) => {
    let id = req.params.id;
    let content = req.body.state;

    console.log(id, content);

    let completedTime = moment().format('MM DD YYYY');

    let queryText = '';

    if (content === 'true') {
        queryText =
            `UPDATE "tasks"
            SET "state" = 'FALSE',
            "completed" = $2
            WHERE "id" = $1;
            `
    } else if (content === 'false') {
        queryText =
            `UPDATE "tasks"
            SET "state" = 'TRUE',
            "completed" = $2
            WHERE "id" = $1;
            `
    }

    pool.query(queryText, [id, completedTime])
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log('POOL BROKE:', err);
            res.sendStatus(500);
        })

})



module.exports = tasksRouter;