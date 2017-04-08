angular
  .module('pickly')
  .controller('DashboardController', DashboardController)

function DashboardController($scope, $http, $location, $window, $data) {
  var socket = io.connect('/dashboard')
  $window.sessionStorage.removeItem('currentProject')
  $scope.user = JSON.parse($window.sessionStorage.getItem('currentUser'))
  $scope.tab = 1
  $scope.pics= $data.getPics()
  $scope.contributors = []
  getProjects()
  $scope.getProjects = getProjects
  $scope.setTab = function(tab) {
    $scope.tab = tab
    $scope.changePasswordFail = false
    $scope.changePasswordSuccess = false
    $scope.alreadyAdmin = false
    $scope.notStudent = false
    $scope.contributors = []
    $scope.saveContribSuccess = false
    $scope.saveContribFail = false
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
  $scope.dispose = function () {
    $scope.students = ''
  }
  $scope.saveStudent = function (newStudent) {
    $scope.newStudent = {}
    if (!newStudent) {
      $scope.idFailed = true
    } else {
      $scope.idFailed = false
      $http({
        method: 'POST',
        url: '/max'
      }).then(function (res) {
        $scope.maxId = res.data[0].id
        newStudent.id = $scope.maxId + 1
        $http({
          method: 'POST',
          url: '/student',
          data: newStudent
        }).then(function (res) {
          $scope.success = true
          $scope.newStudent = {}
        }, function (res) {
          $scope.success = false
        })
      }, function (res) {
        console.log('Wuuuut')
      })
    }
  }
  $scope.createProject = function(project) {
    $scope.project = {}
    project.userId = $scope.user.id
    project.role = 'admin'
    $http({
      method: 'POST',
      url: '/create-project',
      data: project
    }).then(function(res) {
      $window.sessionStorage.setItem('currentProject', angular.toJson(res.data.project))
      getProjects()
      $scope.tab = 6
    }, function (res) {
      console.log('ERR')
    })
  }
  $scope.persist = function (project) {
    var thisProject = JSON.parse($window.sessionStorage.getItem('currentProject'))
    if (!thisProject) {
      $window.sessionStorage.setItem('currentProject', angular.toJson(project))
      $location.path(project.url)
    } else {
      $location.path(thisProject.url)
    }
  }
  $scope.deleteProject = function (project) {
    if (confirm('¿Eliminar proyecto?')) {
      project.userId = $scope.user.id
      $http({
        method: 'POST',
        url: '/delete-project',
        data: project
      }).then(function (res) {
        getProjects()
      }, function (res) {
        console.log('ERR')
      })
    }
  }
  $scope.changePassword = function (data) {
    if (!(data.new === data.confirm)) {
      $scope.changePasswordFail = true
      $scope.changePasswordSuccess = false
      $scope.pwd = {}
    } else {
      $http({
        method: 'POST',
        url: '/change-password',
        data: { new: data.new, id: $scope.user.id }
      }).then(function (res) {
          $scope.changePasswordSuccess = true
          $scope.changePasswordFail = false
          $scope.pwd = {}
      }, function (res) {
          console.log('ERR')
      })
    }
  }
  $scope.search = function (helper) {
    helper.me = $scope.user.username
    $scope.helper = {}
    $scope.alreadyAdmin = false
    $scope.notStudent = false
    $http({
      method: 'POST',
      url: '/search-contributor',
      data: helper
    }).then(function (res) {
        $scope.contributors.push(res.data)
    }, function (res) {
        if (res.status == 409) {
          $scope.alreadyAdmin = true
        }
        if (res.status == 500) {
          $scope.notStudent = true
        }
    })
  }
  $scope.removeContributor = function (contributor) {
    
    var removeContributor = confirm('¿Retirar a ' + contributor.fullname + ' de la lista?')

    if (removeContributor) {
      var index = $scope.contributors.indexOf(contributor)
      if (index > -1) {
        $scope.contributors.splice(index, 1)
      }
      $scope.alreadyAdmin = false
      $scope.notStudent = false
    }
  }
  $scope.persistContrib = function (project) {
    $window.sessionStorage.setItem('currentProject', angular.toJson(project))
  }
  $scope.saveContributor = function () {
    var project = JSON.parse($window.sessionStorage.getItem('currentProject'));
    var data = {
      project: project,
      contributors: $scope.contributors,
      me: {
        id: $scope.user.id,
        username: $scope.user.username,
        fullname: $scope.user.firstname + ' ' + $scope.user.lastname,
        role: 'admin'
      }
    }
    $http({
        method: 'POST',
        url: '/save-contributor',
        data: data
      }).then(function (res) {
          $scope.contributors = []
          $scope.saveContribSuccess = true
          getProjects()
      }, function (res) {
          $scope.saveContribFail = true 
      })
  }
  $scope.cancel = function () {
    $window.sessionStorage.removeItem('currentProject')
    $scope.tab = 1
  }
  function getProjects () {
    var data = { "id": $scope.user.id }
    $http({
      method: 'POST',
      url: '/projects',
      data: data
    }).then(function (res) {
      $scope.projects = res.data
      $scope.user.projects = $scope.projects
      $window.sessionStorage.setItem('currentUser', angular.toJson($scope.user))
    }, function (res) {
      console.log('ERR')
    })
  }
}
