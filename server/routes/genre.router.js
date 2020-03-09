const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

router.get('/:id', (req, res) => {
    // return selected genres
    console.log('in get id', req.params);
    const id = req.params.id
    const queryText = 'SELECT genres.name, movies.title FROM genres JOIN movie_genres on movie_genres.genre_id = genres.id JOIN movies on movie_genres.movie_id = movies.id WHERE movies.id = $1;';
    pool.query(queryText, [id])
        .then( (response) => {
            res.send(response.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});


module.exports = router;