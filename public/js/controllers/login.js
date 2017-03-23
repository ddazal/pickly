angular
	.module('pickly')
	.directive('getInput', getInput)
	.controller('LoginController', LoginController);

function LoginController($scope, $http, $location, $window) {
	$window.sessionStorage.removeItem('currentProject')
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

function getInput() {
	return {
		restrict: 'A',
		scope: true,
		link: function(scope, element, attrs) {
			element.on('change', function(event) {
				scope.user.password = event.target.value
			})
		}
	}
}