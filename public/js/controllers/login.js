angular
	.module('pickly')
	.controller('LoginController', LoginController);

function LoginController($scope, $http, $location, $window) {
	$scope.user;
	$scope.login = function (user) {
		$http({
			method: 'POST',
			url: '/login',
			data: user
		}).then(function(res) {
			$scope.failed = '';
			$window.sessionStorage.setItem('currentUser', angular.toJson(res.data))
			$scope.user = $window.sessionStorage.getItem('currentUser')
			$location.path('/dashboard')
		}, function(res) {
			$scope.failed = true;
		})
	}
}