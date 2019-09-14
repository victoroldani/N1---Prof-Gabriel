(function () {
    'use strict';

    angular
        .module('app')
        .factory('QuestionService', Service);

    function Service($http, $q) {
        var service = {};

        service.GetCurrent = GetCurrent;
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Delete = Delete;

        return service;

        function GetCurrent() {
            return $http.get('/api/questions/current').then(handleSuccess, handleError);
        }

        function GetAll() {
            return $http.get('/api/questions').then(handleSuccess, handleError);
        }

        function GetById(_id) {
            return $http.get('/api/questions/' + _id).then(handleSuccess, handleError);
        }

        function Create(questions) {
            return $http.post('/api/questions/register', questions).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete('/api/questions/' + _id).then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
