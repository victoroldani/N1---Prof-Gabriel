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
//service.delete = _delete;

module.exports = service;


 function createQuestions(questions) 
    {
        // set user object to userParam without the cleartext password
        //var user = _.omit(userParam, 'password');

        // add hashed password to user object
        //user.hash = bcrypt.hashSync(userParam.password, 10);

        // db.questions.insert(
        //     questions,
        //     function (err, doc) {
        //         if (err) deferred.reject(err.name + ': ' + err.message);

        //         deferred.resolve();
        //     });
    }


function _delete(_id) {
    var deferred = Q.defer();

    db.questions.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}