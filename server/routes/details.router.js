const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

router.get('/:id', (req, res) => {
    // return all movies
    const queryText = `SELECT * FROM movies WHERE id=$1 ORDER BY title ASC`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            if (result.rows.length > 0) {
                res.send(result.rows[0]);
            } else {
                console.log(`Movie not found`);
                res.sendStatus(500);
            }  
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;