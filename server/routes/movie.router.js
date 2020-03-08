const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

router.get('/', (req, res) => {
    // return all movies
    const queryText = `SELECT * FROM movies ORDER BY title ASC`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});


module.exports = router;