'use strict';

describe('PicPageController', function() {
	beforeEach(module('appPickly'));

	var $controller;

	beforeEach(inject(function($_controller_){
		$controller = $_controller_;
	}));

	describe('',function(){
		var $scope, controller;

		beforeEach(function(){
			$scope = {};
			controller = $controller('PicPageController',{ $scope : $scope });
		});

		// it()
	});
});