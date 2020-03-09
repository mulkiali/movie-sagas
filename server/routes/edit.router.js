const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");


router.put('/:id', (req, res) => {
    let id = req.params.id;
    let title = req.body.title;
    let description = req.body.description;
    const queryText = `UPDATE movies SET title = $1, description = $2 WHERE id = $3`
    const values = ([title, description, id])
    pool.query(queryText, values)
      .then( (result) => {
        res.send(result.rows);
      })
      .catch( (error) => {
        console.log(`Error updating details`, error);
        res.sendStatus(500);
      })
   })
   

module.exports = router;