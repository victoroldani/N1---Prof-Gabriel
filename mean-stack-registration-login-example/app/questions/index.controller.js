(function () {
    'use strict';

    angular
        .module('app')
        .controller('questions.IndexController', Controller);

    function Controller($window, UserService, QuestionService, FlashService) {
        var vm = this;

        vm.questions = null;
        vm.saveQuestions = saveQuestions;
        vm.listquestions=null;
        vm.deleteQuestions = deleteQuestions;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
                UpdatePage();
            });
        
        }
        function UpdatePage()
        {
            QuestionService.GetList(vm.user).then(function(questions)
            {
                vm.listquestions = questions;
            })
        }

        function saveQuestions() {
            let question = {
                question: vm.questions,
                userid: vm.user._id
            };
            QuestionService.Create(question)
                .then(function () {
                    
                    FlashService.Success('Questions created');
                    UpdatePage();
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
            }

       function deleteQuestions(Pergunta) {
            QuestionService.Delete(Pergunta)
                .then(function () {
                    UpdatePage();
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    }

})();