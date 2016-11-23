goog.require('Blockly.JavaScript');


Blockly.JavaScript['adc_done'] = function(block) {
	var code = 'adc_done()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['adc_read'] = function(block) {
	// var option = block.getFieldValue('ADCoptions');
	// var code = 'read_adc(' + option +');\n';
	// if(option == 'ADC_START_AND_READ') {
	// 	code = 'read_adc();\n';
	// }
	// if(block.outputConnection) {
	// 	return [code, Blockly.JavaScript.ORDER_NONE];
	// } else {
	// 	return code;
	// }
	if(block.outputConnection) {
		return ["I have an output", Blockly.JavaScript.ORDER_NONE];
	} else {
		return "I don't have an output";
	}
};
Blockly.JavaScript['adc_channel'] = function(block) {
	var channel = block.getFieldValue('channel');
	var code = 'set_adc_channel(' + channel +');\n';
	return code;
};
Blockly.JavaScript['adc_setup'] = function(block) {
	var option = block.getFieldValue('CLOCKoptions');
	var code = 'setup_adc(' + option +');\n';
	return code;
};