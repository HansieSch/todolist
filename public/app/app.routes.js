angular.module('app.routes', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    
    $routeProvider
        
        // Home page
        .when('/', {
            templateUrl: 'app/views/pages/home.html',
            controller: 'mainController',
            controllerAs: 'main'
        })

        .when('/new', {
            templateUrl: 'app/views/pages/new.html',
            controller: 'newItemController',
            controllerAs: 'new'
        })

        .when('/edit/:id', {
            templateUrl: 'app/views/pages/edit.html',
            controller: 'editItemController',
            controllerAs: 'edit'
        });
    
    $locationProvider.html5Mode(true);
    
});