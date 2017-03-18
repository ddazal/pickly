angular
	.module('pickly')
	.controller('DashboardController', DashboardController)

function DashboardController($scope, $http, $location, $window) {
	$scope.user = JSON.parse($window.sessionStorage.getItem('currentUser'))
	$scope.logout = function() {
		$http({
			method: 'GET',
			url: '/logout'
		}).then(function(res) {
			$scope.failed = ''
			$window.sessionStorage.clear()
			$location.path('/')
		}, function(res) {
			$scope.failed = true
		})
	}
}