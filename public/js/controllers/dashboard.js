angular
	.module('pickly')
	.controller('DashboardController', DashboardController)

function DashboardController($scope, $http, $location, $rootScope) {
	$scope.user = $rootScope.currentUser
	$scope.logout = function() {
		$http({
			method: 'GET',
			url: '/logout'
		}).then(function(res) {
			$scope.failed = ''
			$location.path('/')
		}, function(res) {
			$scope.failed = true
		})
	}
}