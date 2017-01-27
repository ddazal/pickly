angular
	.module('pickly')
	.controller('HomeController', HomeController);

function HomeController($scope, $translate) {
	$scope.pics = [
		{
			name: 'PIC16F877A',
			url: '/p16'
		},
		{
			name: 'PIC18F4550',
			url: '/p18'
		},
	]
	$scope.changeLanguage = function(lan_key){
		$translate.use(lan_key);
		$('#block_lang').replaceWith('<script id="block_lang" src="google-blockly/msg/js/' + lan_key + '.js"></script>');
	};
};

