(function(){
	app.controller('PicSelectController', function($scope) {
		$scope.pics = [
			{
				name: 'PIC16F877A',
				url: 'p16f877a.html'
			},
			{
				name: 'PIC18F4550',
				url: 'p18f4550.html'
			}
		];
	});	
})();