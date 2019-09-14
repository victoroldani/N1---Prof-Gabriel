(function () {
    'use strict';

    angular
        .module('app')
        .controller('questions.IndexController', Controller);

    function Controller($window, UserService, QuestionService, FlashService) {
        var vm = this;

        vm.questions = null;
        vm.saveQuestions = saveQuestions;
        vm.deleteQuestions = deleteQuestions;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function saveQuestions() {
            let question = {
                question: vm.questions
            };
            QuestionService.Create(question)
                .then(function () {
                    FlashService.Success('Questions created');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

       /* function deleteQuestions() {
            UserService.Delete(vm.user._id)
                .then(function () {
                    // log user out
                    $window.location = '/login';
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
        */
    }

})();