const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.post('/', (req, res) => {
//     let feedback = req.body;
//     console.log('Post feedback', feedback);
    
//     let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
//     VALUES ($1, $2, $3, $4);`;
//     pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
//       .then( (response) => {
//         res.sendStatus(201);
//       })
//       .catch( (error) => {
//         console.log('Failed to add new review', feedback);
//         console.log(error);
//         res.sendStatus(500);
//       })
//   })

// router.get('/', (req, res) => {
//     console.log('Getting all feedback');
//     pool.query('SELECT * FROM "feedback" ORDER BY "date"')
//     .then((results) => {
//         res.send(results.rows)
//     }).catch((error) => {
//         console.log('Something went wrong getting feedback', error);
//         res.sendStatus(500);
//     })
// })

// router.delete('/:id', (req, res) => {
//     console.log('Deleteing feedback');
//     let feedbackId = req.params.id;
//     let sqlText = 'DELETE FROM "feedback" WHERE "id"=$1'
//     pool.query(sqlText, [feedbackId])
//     .then((response) => {
//         res.sendStatus(201);
//     }).catch((error) => {
//         res.sendStatus(500);
//     })
// })

// router.put('/:id', (req, res) => {
//     console.log('Flagging Feedback');
//     let feedbackId = req.params.id;
//     let sqlText = 'UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE "id" = $1'
//     pool.query(sqlText, [feedbackId])
//     .then((results) => {
//         res.sendStatus(201);
//     }).catch((error) => {
//         res.sendStatus(500);
//     })
// })

module.exports = router;