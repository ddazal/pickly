var app = angular.module('appPickly', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl : 'partials/home.html',
			controller : 'PicSelectController'
		})
		.when('/p16f877a',{
			templateUrl : 'partials/p16f877a.html',
			controller : 'InjectBlocklyController'
		})
		.when('/p18f4550',{
			templateUrl : 'partials/p18f4550.html',
			controller : 'InjectBlocklyController'
		})
		.otherwise({
			redirecTo : 'partials/error.html'
		});
}]);