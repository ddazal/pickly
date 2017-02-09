angular
	.module('pickly')
	.service('$data', data)

function data () {
	var pics = [
		{ name: 'PIC16F873A' , url: '/p16/pic16f873a' },
		{ name: 'PIC16F874A' , url: '/p16/pic16f874a' },
		{ name: 'PIC16F876A' , url: '/p16/pic16f876a' },
		{ name: 'PIC16F877A' , url: '/p16/pic16f877a' },
		{ name: 'PIC18F2455' , url: '/p18/pic18f2455' },
		{ name: 'PIC18F2550' , url: '/p18/pic18f2550' },
		{ name: 'PIC18F4455' , url: '/p18/pic18f4455' },
		{ name: 'PIC18F4550' , url: '/p18/pic18f4550' },
		{ name: 'PIC18LF2455' , url: '/p18/pic18lf2455' },
		{ name: 'PIC18LF2550' , url: '/p18/pic18lf2550' },
		{ name: 'PIC18LF4455' , url: '/p18/pic18lf4455' },
		{ name: 'PIC18LF4550' , url: '/p18/pic18lf4550' }
	];
	return {
		getPics: function() {
			return pics
		}
	}
}