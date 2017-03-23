angular
	.module('pickly')
	.controller('DashboardController', DashboardController)

function DashboardController($scope, $http, $location, $window, $data) {
	$window.sessionStorage.removeItem('currentProject')
	$scope.user = JSON.parse($window.sessionStorage.getItem('currentUser'))
	$scope.projects = $scope.user.projects;
	$scope.tab = 1
	$scope.pics= $data.getPics()
	$scope.setTab = function(tab) {
		$scope.tab = tab
	}
	$scope.checkTab = function(tab) {
		return $scope.tab === tab
	}
	$scope.admin = $scope.user.roles.filter(function(el) {
		if (el === 'admin')
			return true;
		return false;
	}).toString()
	$scope.logout = function() {
		$http({
			method: 'GET',
			url: '/logout'
		}).then(function(res) {
			$scope.logoutFailed = ''
			$window.sessionStorage.clear()
			$location.path('/')
		}, function(res) {
			$scope.logoutFailed = true
		})
	}
	$scope.getStudents = function() {
		$http({
			method: 'GET',
			url: '/students'
		}).then(function(res) {
			$scope.students = res.data
		}, function(res) {
			console.log('Algo ha salido mal')
		})
	}
	$scope.dispose = function() {
		$scope.students = ''
	}
	$scope.saveStudent = function(newStudent) {
		if(!newStudent) {
			$scope.idFailed = true
		} else {
			$scope.idFailed = false
			$http({
				method: 'POST',
				url: '/max'
			}).then(function(res) {
				$scope.maxId = res.data[0].id
				newStudent.id = $scope.maxId + 1
				$http({
					method: 'POST',
					url: '/student',
					data: newStudent
				}).then(function(res) {
					$scope.success = true
					$scope.newStudent = {}
				}, function(res) {
					$scope.success = false
				})
			}, function(res) {
				console.log('Wuuuut')
			})
		}
	}
	$scope.createProject = function(project) {
		project.userId = $scope.user.id
		$http({
			method: 'POST',
			url: '/createProject',
			data: project
		}).then(function(res) {
			$location.path(res.data.url)
		}, function (res) {
			console.log('ERR')
		})
	}
	$scope.persist = function(project) {
		$window.sessionStorage.setItem('currentProject', angular.toJson(project))
		$location.path(project.url)
	}
}