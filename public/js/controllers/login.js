angular
	.module('pickly')
	.directive('getInput', getInput)
	.controller('LoginController', LoginController)
	.controller('SignupController', SignupController);

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

function SignupController($scope, $http, $location) {
    $scope.newUser = {};
    $scope.errorMessage = '';

    $scope.signup = function(newUser) {
        $http({
            method: 'POST',
            url: '/signup',
            data: newUser
        }).then(function(res) {
            $scope.errorMessage = '';
            // Redirect to the login page upon successful signup
            $location.path('/login');
        }, function(res) {
            $scope.error = true;
            $scope.errorMessage = res.data.message || 'Ha ocurrido un error. Inténtalo de nuevo.';
        });
    };
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