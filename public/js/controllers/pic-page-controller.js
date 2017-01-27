angular
	.module('pickly')
	.controller('PicPageController', PicPageController);

function PicPageController($scope, $route, $location, $translate, $rootScope, $timeout){
	$scope.mensaje = $translate('evento.advertencia').then(function(translationId){
		$scope.mensaje = translationId;
	});
	$scope.categoria1 = $translate('categorias.cat_1').then(function(translationId){
		$scope.categoria1 = translationId;
	});
	$scope.categoria2 = $translate('categorias.cat_2').then(function(translationId){
		$scope.categoria2 = translationId;
	});
	$scope.categoria3 = $translate('categorias.cat_3').then(function(translationId){
		$scope.categoria3 = translationId;
	});
	$scope.categoria4 = $translate('categorias.cat_4').then(function(translationId){
		$scope.categoria4 = translationId;
	});
	$scope.categoria5 = $translate('categorias.cat_5').then(function(translationId){
		$scope.categoria5 = translationId;
	});
	$scope.categoria6 = $translate('categorias.cat_6').then(function(translationId){
		$scope.categoria6 = translationId;
	});
	$scope.categoria7 = $translate('categorias.cat_7').then(function(translationId){
		$scope.categoria7 = translationId;
	});
	$scope.categoria8 = $translate('categorias.cat_8').then(function(translationId){
		$scope.categoria8 = translationId;
	});
	$scope.categoria9 = $translate('categorias.cat_9').then(function(translationId){
		$scope.categoria9 = translationId;
	});
	$scope.categoria10 = $translate('categorias.cat_10').then(function(translationId){
		$scope.categoria10 = translationId;
	});
	$scope.categoria12 = $translate('categorias.cat_12').then(function(translationId){
		$scope.categoria12 = translationId;
	});
	
	$rootScope.$on('$translateChangeSuccess', function() {
		$translate('evento.advertencia').then(function(translationId){
			$scope.mensaje = translationId;
		});		
		$translate('categorias.cat_1').then(function(translationId){
			$scope.categoria1 = translationId;
		});	
		$translate('categorias.cat_2').then(function(translationId){
			$scope.categoria2 = translationId;
		});	
		$translate('categorias.cat_3').then(function(translationId){
			$scope.categoria3 = translationId;
		});	
		$translate('categorias.cat_4').then(function(translationId){
			$scope.categoria4 = translationId;
		});	
		$translate('categorias.cat_5').then(function(translationId){
			$scope.categoria5 = translationId;
		});	
		$translate('categorias.cat_6').then(function(translationId){
			$scope.categoria6 = translationId;
		});	
		$translate('categorias.cat_7').then(function(translationId){
			$scope.categoria7 = translationId;
		});
		$translate('categorias.cat_8').then(function(translationId){
			$scope.categoria8 = translationId;
		});	
		$translate('categorias.cat_9').then(function(translationId){
			$scope.categoria9 = translationId;
		});	
		$translate('categorias.cat_10').then(function(translationId){
			$scope.categoria10 = translationId;
		});	
		$translate('categorias.cat_12').then(function(translationId){
			$scope.categoria12 = translationId;
		});		
	});

	// Funciones para el manejo de las pestañas Bloques y Código
	$scope.tab = 1;
	$scope.selectTab = function(setTab) {
		$scope.tab = setTab;
	};
	$scope.tabIsSelected = function(checkTab) {
		var flag = $scope.tab === checkTab;
		return flag;
	};
	//
	$scope.picChosen = "";
	$scope.picNotChosen = "";
	$scope.datasheet = "";
	if ($location.url()==="/p16/") {
		$scope.picChosen = "PIC16F877A";
		$scope.picNotChosen = "PIC18F4550";
		$scope.datasheet = $location.url().slice(1, -1);
	} else {
		$scope.picChosen = "PIC18F4550";
		$scope.picNotChosen = "PIC16F877A";
		$scope.datasheet = $location.url().slice(1, -1);
	}
	// Evento para detectar la acción de regresar en el navegador
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
		if ($location.url() === "/p16/") { $location.path("/p18/"); }
		else { $location.path("/p16/"); }
	};
	// Cambio de idioma de bloques
	$scope.changeLanguage = function(lan_key){
		$translate.use(lan_key);
		$('#block_lang').replaceWith('<script id="block_lang" src="google-blockly/msg/js/'+lan_key+'.js"></script>');
	};
};
	
