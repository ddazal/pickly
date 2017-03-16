angular
	.module('pickly')
	.controller('LoginController', LoginController);

function LoginController($scope, $http, $location, $rootScope) {
	$scope.login = function (user) {
		$http({
			method: 'POST',
			url: '/login',
			data: user
		}).then(function(res) {
			$scope.failed = '';
			$rootScope.currentUser = res.data
			$location.path('/dashboard')
		}, function(res) {
			$scope.failed = true;
		})
	}
}