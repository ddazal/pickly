(function(){
	
	angular
		.module('appPickly', ['ngRoute', 'pascalprecht.translate'])
		.config(config);

	function config($routeProvider,$translateProvider) {
		$routeProvider
			.when('/',{
				templateUrl : 'partials/home.html',
				controller : 'HomeController'
			})
			.when('/p16f877a',{
				templateUrl : 'partials/p16f877a.html',
				controller : 'PicPageController'
			})
			.when('/p18f4550',{
				templateUrl : 'partials/p18f4550.html',
				controller : 'PicPageController'
			})
			.when('/error',{
				templateUrl : 'partials/error.html'
			})
			.otherwise({
				redirectTo : '/error'
			})
		$translateProvider
			.translations('es',translationsES)
			.translations('en',translationsEN)
			.preferredLanguage('es');
	};

	
	
})();

