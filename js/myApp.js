var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/content', {
            templateUrl: 'content.html',
            
        })
        .when('/team', {
            templateUrl:'Team.html',
           
        })
        .otherwise({
            redirecTo:'/content',
        })
        
});