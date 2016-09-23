(function(){

	angular
		.module('appPickly')
		.controller('HomeController', HomeController)
		.controller('PicPageController', PicPageController);

	function HomeController($scope) {
		$scope.pics = [
			{
				name: 'PIC16F877A',
				url: '#p16f877a'
			},
			{
				name: 'PIC18F4550',
				url: '#p18f4550'
			}
		];
	};

	function PicPageController($scope,$location){
		$scope.pic_selected = "";
		$scope.pic_not_selected = "";

		if ($location.url()==="/p16f877a") {
			$scope.pic_selected = "PIC16F877A";
			$scope.pic_not_selected = "PIC18F4550";
		} else {
			$scope.pic_selected = "PIC18F4550";
			$scope.pic_not_selected = "PIC16F877A";
		}

		$scope.click_home = function(){
			var regresar = confirm('Ha seleccionado volver a la página de inicio. Su trabajo no será guardado.');
			if (regresar == true) {
				$location.path("/");
			} else {
				$location.path($location.url());
			}
		};

		$scope.click_change_pic = function(){
			var cambiar = confirm('Ha seleccionado cambiar de microcontrolador. Su trabajo no será guardado.');
			if (cambiar === true) {
				if ($location.url() === "/p16f877a") {
					$location.path("/p18f4550");
				} else {
					$location.path("/p16f877a");
				};
			} else {
				$location.path($location.url());
			}
		};
	};
	
})();