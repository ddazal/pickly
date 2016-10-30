(function(){

	angular
		.module('appPickly')
		.controller('PicPageController', PicPageController);

	function PicPageController($scope, $route, $location, $translate, $rootScope){
		$scope.tab = 1;
		$scope.picChosen = "";
		$scope.picNotChosen = "";
		$scope.datasheet = "";
		$scope.mensaje = $translate('evento.advertencia').then(function(translationId){
			$scope.mensaje = translationId;
		});
		$scope.categoriaC1 = $translate('Categorias.C1').then(function(translationId){
			$scope.categoriaC1 = translationId;
		});
		$scope.categoriaC2 = $translate('Categorias.C2').then(function(translationId){
			$scope.categoriaC2 = translationId;
		});
		$scope.categoriaC3 = $translate('Categorias.C3').then(function(translationId){
			$scope.categoriaC3 = translationId;
		});
		$scope.categoriaC4 = $translate('Categorias.C4').then(function(translationId){
			$scope.categoriaC4 = translationId;
		});
		$scope.categoriaC5 = $translate('Categorias.C5').then(function(translationId){
			$scope.categoriaC5 = translationId;
		});
		$scope.categoriaC6 = $translate('Categorias.C6').then(function(translationId){
			$scope.categoriaC6 = translationId;
		});
		$scope.categoriaC7 = $translate('Categorias.C7').then(function(translationId){
			$scope.categoriaC7 = translationId;
		});
		$scope.categoriaC8 = $translate('Categorias.C8').then(function(translationId){
			$scope.categoriaC8 = translationId;
		});
		$scope.categoriaC9 = $translate('Categorias.C9').then(function(translationId){
			$scope.categoriaC9 = translationId;
		});
		$scope.categoriaC10 = $translate('Categorias.C10').then(function(translationId){
			$scope.categoriaC10 = translationId;
		});
		$scope.categoriaC12 = $translate('Categorias.C12').then(function(translationId){
			$scope.categoriaC12 = translationId;
		});
		

		$scope.selectTab = function(setTab) {
			$scope.tab = setTab;
		};

		$scope.tabIsSelected = function(checkTab) {
			return $scope.tab === checkTab;
		};

		$rootScope.$on('$translateChangeSuccess', function() {
			$translate('evento.advertencia').then(function(translationId){
				$scope.mensaje = translationId;
			});		
			$translate('Categorias.C1').then(function(translationId){
				$scope.categoriaC1 = translationId;
			});	
			$translate('Categorias.C2').then(function(translationId){
				$scope.categoriaC2 = translationId;
			});	
			$translate('Categorias.C3').then(function(translationId){
				$scope.categoriaC3 = translationId;
			});	
			$translate('Categorias.C4').then(function(translationId){
				$scope.categoriaC4 = translationId;
			});	
			$translate('Categorias.C5').then(function(translationId){
				$scope.categoriaC5 = translationId;
			});	
			$translate('Categorias.C6').then(function(translationId){
				$scope.categoriaC6 = translationId;
			});	
			$translate('Categorias.C7').then(function(translationId){
				$scope.categoriaC7 = translationId;
			});
			$translate('Categorias.C8').then(function(translationId){
				$scope.categoriaC8 = translationId;
			});	
			$translate('Categorias.C9').then(function(translationId){
				$scope.categoriaC9 = translationId;
			});	
			$translate('Categorias.C10').then(function(translationId){
				$scope.categoriaC10 = translationId;
			});	
			$translate('Categorias.C12').then(function(translationId){
				$scope.categoriaC12 = translationId;
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