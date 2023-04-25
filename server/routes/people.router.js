const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// these routes have been provided for you. 
// you shouldn't have to change anything in this file.


router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "people"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "people" ("name", "role") VALUES ($1, $2);'
    pool.query(queryText, [req.body.name, req.body.role])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;