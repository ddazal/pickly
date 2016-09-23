'use strict';

describe('HomeController', function() {
    beforeEach(module('appPickly'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope.pics', function() {
  	   var $scope, controller;

  	   beforeEach(function() {
  		    $scope = {};
  		    controller = $controller('HomeController', { $scope: $scope});
  	   });

      it('verifica el tamaño del arreglo', function() {
      	expect($scope.pics.length).toBe(2);
      });

      it('verifica el primer elemento del arreglo', function() {
      	var pic = {name : 'PIC16F877A', url : '#p16f877a'};
      	expect($scope.pics[0]).toEqual(pic);
      });

      it('verifica el segundo elemento del arreglo',function() {
      	var pic = {name : 'PIC18F4550', url : '#p18f4550'};
      	expect($scope.pics[1]).toEqual(pic);
      });
  });
});