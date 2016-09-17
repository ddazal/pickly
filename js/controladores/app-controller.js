(function(){
	app.controller('HomeController', function($scope) {
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
	});

	app.controller('InjectBlocklyController', function($scope){
		$scope.workspace = Blockly.inject('blocklyDiv',{
			toolbox : document.getElementById('toolbox')
		});
	});
	
})();