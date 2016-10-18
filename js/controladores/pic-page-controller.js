(function(){

	angular
		.module('appPickly')
		.controller('PicPageController', PicPageController);

	function PicPageController($scope, $route, $location, $translate, $rootScope){
		$scope.picChosen = "";
		$scope.picNotChosen = "";
		$scope.datasheet = "";
		$scope.mensaje = $translate('evento.advertencia').then(function(translationId){
			$scope.mensaje = translationId;
		});

		$rootScope.$on('$translateChangeSuccess', function() {
			$translate('evento.advertencia').then(function(translationId){
				$scope.mensaje = translationId;
			});			
		});

		if ($location.url()==="/p16f877a") {
			$scope.picChosen = "PIC16F877A";
			$scope.picNotChosen = "PIC18F4550";
			$scope.datasheet = $location.url().slice(1);
		} else {
			$scope.picChosen = "PIC18F4550";
			$scope.picNotChosen = "PIC16F877A";
			$scope.datasheet = $location.url().slice(1);
		}
		// Evento de regresar utilizando el navegador
		$scope.$on('$routeChangeStart', function(event){
			var back = confirm($scope.mensaje);
			if(!back) { event.preventDefault(); }
		});
		// Volver al home
		$scope.clickHome = function(){
			$location.path("/");
		};
		// Cambiar de pic
		$scope.changePic = function(){
			if ($location.url() === "/p16f877a") { $location.path("/p18f4550"); }
			else { $location.path("/p16f877a"); }
		};
		// Traductor
		$scope.changeLanguage = function(Lan_key){
			$translate.use(Lan_key);
			$('#block_lang').replaceWith('<script id="block_lang" src="google-blockly/msg/js/'+Lan_key+'.js"></script>');
		};
	};
	
})();