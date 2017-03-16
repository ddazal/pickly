angular
	.module('pickly')
	.config(config);

function config($routeProvider, $locationProvider, $translateProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'HomeController'
		})
		.when('/p16/:id', {
			templateUrl : 'views/p16.html',
			controller : 'PicPageController'
		})
		.when('/p18/:id', {
			templateUrl : 'views/p18.html',
			controller : 'PicPageController'
		})
		.when('/error', {
			templateUrl : 'views/error.html'
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})
		.when('/dashboard', {
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardController'
		})
		.otherwise({
			redirectTo : '/error'
		});

	$locationProvider.html5Mode(true);
	
	$translateProvider
		.translations('es',translationES)
		.translations('en',translationEN)
		.preferredLanguage('es')
		.useSanitizeValueStrategy('escapeParameters');
};