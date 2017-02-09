angular
	.module('pickly')
	.controller('HomeController', HomeController);

function HomeController($scope, $translate, $data) {
	$scope.pics = $data.getPics()
	$scope.changeLanguage = function(lan_key){
		$translate.use(lan_key);
		$('#block_lang').replaceWith('<script id="block_lang" src="google-blockly/msg/js/' + lan_key + '.js"></script>');
	};
};

