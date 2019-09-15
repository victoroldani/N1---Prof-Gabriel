(function () {
    'use strict';

    angular
        .module('app')
        .factory('QuestionService', Service);

    function Service($http, $q) {
        var service = {};

        service.GetList = GetList;
        service.Create = Create;
        service.Delete = Delete;

        return service;

        function GetList(user) {
            
            return $http.get('/api/questions/list/' + user._id).then(handleSuccess, handleError);
        }
        function Create(questions) {
            return $http.post('/api/questions/register', questions).then(handleSuccess, handleError);
        }

        function Delete(Pergunta) {
            return $http.delete('/api/questions/delete/' + Pergunta._id ).then(handleSuccess, handleError);
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
