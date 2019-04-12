const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let project = req.body;
    console.log('Post project', project);
    
    let sqlText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(sqlText, [  ])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to add new project', project);
        console.log('Error', error);
        res.sendStatus(500);
      })
  })

router.get('/', (req, res) => {
    console.log('Getting all projects');
    pool.query(`SELECT "projects"."name" AS "project_name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed", "tags"."name" FROM "projects" 
    JOIN "tags" ON "projects"."tag_id" = "tags"."id"
    ORDER BY "date_completed";`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting projects', error);
        res.sendStatus(500);
    })
})

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