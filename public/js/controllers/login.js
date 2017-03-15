angular
	.module('pickly')
	.controller('LoginController', LoginController);

function LoginController($scope, $http, $location) {
	$scope.login = function (user) {
		$http({
			method: 'POST',
			url: '/login',
			data: user
		}).then(function(res) {
			$scope.flag = '';
			$location.path('/dashboard')
		}, function(res) {
			$scope.flag = true;
		})
	}
}