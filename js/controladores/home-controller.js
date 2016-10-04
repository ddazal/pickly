(function(){

	angular
		.module('appPickly')
		.controller('HomeController', HomeController);


	function HomeController($scope,$translate) {
		$scope.pics = [
			{
				name: 'PIC16F877A',
				url: '#p16f877a'
			},
			{
				name: 'PIC18F4550',
				url: '#p18f4550'
			}
		]
		$scope.changeLanguage = function(Lan_key){
			$translate.use(Lan_key)
		};
	};

})();