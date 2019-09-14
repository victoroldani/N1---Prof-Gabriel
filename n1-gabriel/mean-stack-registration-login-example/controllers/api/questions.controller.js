var config = require('config.json');
var express = require('express');
var router = express.Router();
var QuestionService = require('services/questions.service');

// routes
router.post('/register', registerQuestions);

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
    userService.getById(req.session.userId)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
    
}
