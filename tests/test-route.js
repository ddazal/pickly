'use strict';

describe('Testing Routes', function() {
	beforeEach(module('appPickly'));

	var $route, $location, $rootScope, $httpBackend;

	beforeEach(inject(function(_$route_, _$location_, _$rootScope_, _$httpBackend_){
		$route = _$route_;
		$location = _$location_;
		$rootScope = _$rootScope_;
		$httpBackend = _$httpBackend_;
	}));

	it('verifica los parámetros de routeProvider',function(){
		expect($route.current).toBeUndefined();

		$httpBackend.expectGET('partials/home.html').respond(200);

		$location.path('/');
		$rootScope.$digest();

		expect($route.current.templateUrl).toBe('partials/home.html');
		expect($route.current.controller).toBe('HomeController');

		$httpBackend.expectGET('partials/p16f877a.html').respond(200);

		$location.path('/p16f877a');
		$rootScope.$digest();

		expect($route.current.templateUrl).toBe('partials/p16f877a.html');
		expect($route.current.controller).toBe('PicPageController');



		$httpBackend.expectGET('partials/p18f4550.html').respond(200);

		$location.path('/p18f4550');
		$rootScope.$digest();

		expect($route.current.templateUrl).toBe('partials/p18f4550.html');
		expect($route.current.controller).toBe('PicPageController');



		$httpBackend.expectGET('partials/error.html').respond(200);

		$location.path('/error');
		$rootScope.$digest();

		expect($route.current.templateUrl).toBe('partials/error.html');


	});
});