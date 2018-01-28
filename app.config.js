angular.module('IDSDemo')
        .config(config)
        .run(function ($state, $rootScope) {
            $rootScope.$state = $state;
        });

function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/dashBoard/main");

    $stateProvider

        .state('dashBoard',{
            url:"/dashBoard",
            abstract:true,
            templateUrl:'views/common/content.html'
        })

        .state('dashBoard.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Dashboard' }
        })
        .state('dashBoard.minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Settings' }
        })
}