angular
	.module('pickly')
	.controller('DashboardController', DashboardController)

function DashboardController($scope, $http, $location, $window, $data) {
	var socket = io.connect('/dashboard')
	$window.sessionStorage.removeItem('currentProject')
	$scope.user = JSON.parse($window.sessionStorage.getItem('currentUser'))
	$scope.tab = 1
	$scope.pics= $data.getPics()
	getProjects()
	$scope.getProjects = getProjects
	$scope.setTab = function(tab) {
		$scope.changePasswordFail = false
		$scope.changePasswordSuccess = false
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
			socket.emit('logout')
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
		project.role = 'admin'
		$http({
			method: 'POST',
			url: '/createProject',
			data: project
		}).then(function(res) {
			$window.sessionStorage.setItem('currentProject', angular.toJson(project))
			getProjects()
			$location.path(res.data.project.url)
		}, function (res) {
			console.log('ERR')
		})
	}
	$scope.persist = function(project) {
		$window.sessionStorage.setItem('currentProject', angular.toJson(project))
		$location.path(project.url)
		console.log(project._id)
	}
	$scope.deleteProject = function(project) {
		project.userId = $scope.user.id
		$http({
			method: 'POST',
			url: '/deleteProject',
			data: project
		}).then(function(res) {
			getProjects()	
		}, function(res) {
			console.log('ERR')
		})
	}
	$scope.changePassword = function(data) {
		if (!(data.new === data.confirm)) {
			$scope.changePasswordFail = true
			$scope.changePasswordSuccess = false
			$scope.pwd = {}
		} else {
			$http({
				method: 'POST',
				url: '/changePassword',
				data: { new: data.new, id: $scope.user.id }
			}).then(function(res) {
					$scope.changePasswordSuccess = true
					$scope.changePasswordFail = false
					$scope.pwd = {}
			}, function(res) {
					console.log('ERR')
			})
		}
	}
	function getProjects() {
		var data = { "id" : $scope.user.id }
		$http({
			method: 'POST',
			url: '/projects',
			data: data
		}).then(function(res) {
			$scope.projects = res.data
		}, function(res) {
			console.log('ERR')
		})
	}
}