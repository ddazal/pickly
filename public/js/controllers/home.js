angular
	.module('pickly')
	.controller('HomeController', HomeController);

function HomeController($scope, $translate, $data, $window) {
  $scope.user = JSON.parse($window.sessionStorage.getItem('currentUser'))
  console.log($scope.user)
  $scope.$on('$viewContentLoaded', homeJS)
	$scope.pics = $data.getPics()
	$scope.changeLanguage = function(lan_key){
		$translate.use(lan_key);
		$('#block_lang').replaceWith('<script id="block_lang" src="google-blockly/msg/js/' + lan_key + '.js"></script>');
	};

	function homeJS () {
  	window.sr = ScrollReveal({ reset: true })
  	.reveal('.icon', { duration: 1500 }, 375)
    .reveal('.sr-button')
  	$("#modal_pic").on('hidden.bs.modal', function () {
    	$(this).data('bs.modal', null);
  	});
  	$("#header-btn").on('click', function(event) {
    	if (this.hash !== "") {
      	event.preventDefault();
      	var hash = this.hash;
      	$('html, body').animate({
        	scrollTop: $(hash).offset().top
      	}, 1000, function(){
      		window.location.hash = hash;
      	});
    	}
  	});
    $('#main-nav').affix({
      offset: {
        top: 200
      }
    })
	}
};


