var config = require('config.json');
var express = require('express');
var router = express.Router();
var QuestionService = require('services/questions.service');

// routes
router.post('/register', registerQuestions);
router.get('/list/:userid',getQuestions);
router.delete('/delete/:Pergunta', deleteQuestions)
module.exports = router;

//router.delete('/:_id', deleteUser);


function registerQuestions(req, res) {
    QuestionService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getQuestions(req, res) {
    QuestionService.getlist(req.params.userid).then(function (questions)
     {
                res.send(questions);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });

   }
   function deleteQuestions(req, res) {
    QuestionService.delete(req.params.Pergunta).then(function ()
     {
         res.sendStatus(200);
     })
        .catch(function (err) {
            res.status(400).send(err);
        });
    }