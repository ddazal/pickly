var app = angular.module('appPickly', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/p16f877a',{
			templateUrl : 'partials/p16f877a.html'
		})
		.when('/p18f4550',{
			templateUrl : 'partials/p18f4550.html'
		});
}]);