'use strict';

describe('Testing Routes', function() {
	beforeEach(module('appPickly'));

	var $route, $location, $rootScope, $httpBackend;

	beforeEach(inject(function(_$route_, _$location_, _$rootScope_, _$httpBackend_){
		$route = _$route_;
		$location = _$location_;
		$rootScope = _$rootScope_;
		$httpBackend = _$httpBackend_;

		$httpBackend.when('GET', 'partials/p16f877a.html').respond(200);
	}));

	it('verifica los parámetros de routeProvider',function(){
		expect($route.routes['/'].controller).toBe('HomeController');
		expect($route.routes['/'].templateUrl).toBe('partials/home.html');

		expect($route.routes['/p16f877a'].controller).toBe('PicPageController');
		expect($route.routes['/p16f877a'].templateUrl).toBe('partials/p16f877a.html');

		expect($route.routes['/p18f4550'].controller).toBe('PicPageController');
		expect($route.routes['/p18f4550'].templateUrl).toBe('partials/p18f4550.html');

		expect($route.routes['/error'].templateUrl).toBe('partials/error.html');

		expect($route.routes[null].redirectTo).toBe('/error');
	});
});