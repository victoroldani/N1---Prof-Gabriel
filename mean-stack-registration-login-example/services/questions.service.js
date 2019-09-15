var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('questions');

var service = {};


service.create = createQuestions;
service.getlist = getlist;
service.delete = deleteQuestions;

module.exports = service;
function getlist(user)
{
    var deferred = Q.defer();
    let query = {
        userid: user
    }
    db.questions.find(query).toArray(function (err, doc)
    {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(doc);
    }
    )
    return deferred.promise;
}


 function createQuestions(questions) 
    {
        var deferred = Q.defer();
         db.questions.insert( questions, function (err, doc) 
         {
                if (err) deferred.reject(err.name + ': ' + err.message);
                 deferred.resolve();
         }
         );
         return deferred.promise;
    }


function deleteQuestions(PerguntaID) {
    var deferred = Q.defer();
    db.questions.remove(
        { _id: mongo.helper.toObjectID(PerguntaID)
         },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}